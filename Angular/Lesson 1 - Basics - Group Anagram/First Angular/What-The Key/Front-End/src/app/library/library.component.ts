import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ToastrService } from 'ngx-toastr';
import { TrackData } from '../home/home.component';
import { getNoteName } from '../result-card/result-card.component';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent {
  library: TrackData[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.fetchTracks();
  }

  fetchTracks() {
    const tracks = localStorage.getItem('library');
    if (tracks) {
      this.library = JSON.parse(tracks);
    } else {
      this.library = [];
    }
    //console.log(this.library);
  }

  getNoteDisplayName(noteValue: number): string {
    return getNoteName(noteValue);
  }
}
