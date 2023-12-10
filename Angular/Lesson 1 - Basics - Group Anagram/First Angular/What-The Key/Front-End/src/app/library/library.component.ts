import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ToastrService } from 'ngx-toastr';
import { TrackData } from '../home/home.component';
import { getNoteName } from '../result-card/result-card.component';
import { FILTERS } from '../filters';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent {
  originalLibrary: TrackData[] = [];
  displayedLibrary: TrackData[] = [];
  filters = FILTERS

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
      this.originalLibrary = JSON.parse(tracks);
      this.displayedLibrary = [...this.originalLibrary]; // Make a copy for display
      // console.log(this.originalLibrary);
    } else {
      this.originalLibrary = [];
      this.displayedLibrary = [];
    }
  }

  filterTracks(query: string | null) {
    if (!query) {
      this.displayedLibrary = [...this.originalLibrary]; // Reset to original list if query is empty
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    // Filter from originalLibrary and update displayedLibrary
    this.displayedLibrary = this.originalLibrary
      .filter((track) =>
        track.track.name.toLowerCase().includes(lowerCaseQuery)
      )
      .slice(0, 10);
  }

  searchSubmit(event: Event) {
    const inputEvent = event as InputEvent;
    const query = (inputEvent.target as HTMLInputElement).value;
    this.filterTracks(query);
  }

  getNoteDisplayName(noteValue: number): string {
    return getNoteName(noteValue);
  }
}
