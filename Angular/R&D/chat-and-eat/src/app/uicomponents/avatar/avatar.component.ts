import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { SupabaseService } from 'src/app/Services/supabase.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  _avatarUrl: SafeResourceUrl | undefined;
  uploading = false;
  @Input() location: 'profile' | 'chat' | 'sidebar' = 'profile';
  @Input() is_online: boolean | undefined;

  @Input()
  set avatarUrl(url: string | null) {
    if (url) {
      this.downloadImage(url);
    }
  }

  @Output() upload = new EventEmitter<string>();

  constructor(
    private readonly supabase: SupabaseService,
    private readonly dom: DomSanitizer
  ) {}

  async downloadImage(path: string) {
    try {
      const { data } = await this.supabase.downLoadImage(path);
      if (data instanceof Blob) {
        this._avatarUrl = this.dom.bypassSecurityTrustResourceUrl(
          URL.createObjectURL(data)
        );
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        console.error('Error downloading image: ', error.message);
      }
    }
  }

  async uploadAvatar(event: any) {
    try {
      this.uploading = true;
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `${Math.random()}.${fileExt}`;

      await this.supabase.uploadAvatar(filePath, file);
      this.upload.emit(filePath);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.uploading = false;
    }
  }
}
