import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TrackData } from '../../pages/home/home.component';
import { getNoteName } from '../result-card/result-card.component';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
})
export class TrackComponent {
  @Input() trackData!: TrackData;
  @Output() deleteRequest = new EventEmitter<TrackData>();


  constructor() {}

  getNoteDisplayName(noteValue: number): string {
    return getNoteName(noteValue);
  }

  requestDelete() {
    this.deleteRequest.emit(this.trackData);
  }
  
}
