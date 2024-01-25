import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenuItems(): Observable<string[]> {
    return of(['Pizza', 'Pasta', 'Rice', 'Noodles', 'Soup', 'Burger']).pipe(
      delay(2000)
    );
  }
}
