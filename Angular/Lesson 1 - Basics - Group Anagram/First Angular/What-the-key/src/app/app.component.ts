import { Component } from '@angular/core';
import { SpotifySearchResult, SpotifyService } from './spotify.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly title = 'What-the-key';
  trackData: any;
  private searchTerm$ = new Subject<string>();
  searchTerm: string = ''; // Add this line

  searchResults: SpotifySearchResult | null = null;

  constructor(private spotifyService: SpotifyService) {
    this.searchTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) => {
          if (term.length === 0) {
            return of(null);
          }
          return this.spotifyService.searchTracks(term);
        })
      )
      .subscribe({
        next: (data) => {
          if (data) {
            this.searchResults = data.tracks;
            console.log('Debounced Search Data: ', data);
          } else {
            this.searchResults = null; // Clear results if the search term is empty
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  getTrack(trackId: string) {
    if (trackId.trim().length > 0) {
      this.spotifyService.fetchTrack(trackId).subscribe({
        next: (data) => {
          console.log('track Data:', data);
          this.trackData = data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    }
  }

  search() {
    // Emit the trimmed search term into the stream
    this.searchTerm$.next(this.searchTerm.trim());
  }
}
