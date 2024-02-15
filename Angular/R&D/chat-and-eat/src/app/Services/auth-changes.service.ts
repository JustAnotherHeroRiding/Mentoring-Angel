import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthChangesService {
  public signOutEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
