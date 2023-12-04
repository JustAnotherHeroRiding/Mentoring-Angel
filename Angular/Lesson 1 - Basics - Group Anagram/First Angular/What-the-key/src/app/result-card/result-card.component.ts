import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css'],
})
export class ResultCardComponent implements OnInit {
  @Input() trackData: any; // For track information
  @Input() analysisData: any; // For analysis information

  constructor() {}
  getNoteName(key: number): string {
    const notes = [
      'C',
      'C♯/D♭',
      'D',
      'D♯/E♭',
      'E',
      'F',
      'F♯/G♭',
      'G',
      'G♯/A♭',
      'A',
      'A♯/B♭',
      'B',
    ];
    if (key >= 0 && key <= 11) {
      return notes[key];
    } else {
      return 'Key not found';
    }
  }
  ngOnInit(): void {}
}
