import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, switchMap, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SpotifyTracksSearchResult } from './spotify-types';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private readonly clientId = 'b3876fa1b14f42588cf160ee66daed57'; // Don't forget to delete when pushing
  private readonly clientSecret = 'f6f3844475314b4092ba1075c33a00c3';
  private accessToken: string | null = null;

  constructor(private http: HttpClient) {}

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    });
  }

  private getAuthToken(): Observable<string> {
    if (this.accessToken) {
      return of(this.accessToken); // Return the existing token if it's already fetched
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
    });
    const body = 'grant_type=client_credentials';

    return this.http
      .post<any>('https://accounts.spotify.com/api/token', body, { headers })
      .pipe(
        map((response) => {
          this.accessToken = response.access_token;
          return response.access_token;
        }),
        catchError((error) => throwError(() => error))
      );
  }

  fetchTrack(trackId: string): Observable<any> {
    return this.getAuthToken().pipe(
      switchMap(() => this.makeTrackRequest(trackId)),
      catchError((error) => throwError(() => error))
    );
  }

  private makeTrackRequest(trackId: string): Observable<any> {
    const headers = this.createHeaders();
    const trackRequest = this.http.get(
      `https://api.spotify.com/v1/tracks/${trackId}`,
      { headers }
    );
    const audioFeaturesRequest = this.http.get(
      `https://api.spotify.com/v1/audio-features/${trackId}`,
      { headers }
    );

    return forkJoin({
      track: trackRequest,
      audioFeatures: audioFeaturesRequest,
    });
  }

  searchTracks(searchQuery: string): Observable<SpotifyTracksSearchResult> {
    return this.getAuthToken().pipe(
      switchMap(() => this.makeSearchRequest(searchQuery)),
      catchError((error) => throwError(() => error))
    );
  }

  private makeSearchRequest(searchQuery: string): Observable<SpotifyTracksSearchResult> {
    const headers = this.createHeaders();
    const params = new HttpParams().set('q', searchQuery).set('type', 'track');

    return this.http.get<SpotifyTracksSearchResult>(
      `https://api.spotify.com/v1/search`,
      { headers, params }
    );
  }
}
