import { Component } from '@angular/core';
import { SpotifySearchResult, SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'What-the-key';
  trackData: any;
  searchTerm: string = '';
  searchResults: SpotifySearchResult | null = null;

  constructor(private spotifyService: SpotifyService) {}

  getTrack(trackId: string) {
    this.spotifyService.fetchTrack(trackId).subscribe(
      (data) => {
        console.log('track Data:', data);
        this.trackData = data;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

  search() {
    this.spotifyService.searchTracks(this.searchTerm).subscribe(
      (data) => {
        console.log('Search Data: ', data);
        this.searchResults = data.tracks;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
}
