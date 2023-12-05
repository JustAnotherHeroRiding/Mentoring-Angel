import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, switchMap, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
interface SpotifyTrack {
  album: {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: { reason: string };
    type: string;
    uri: string;
    artists: SpotifyArtist[];
  };
  artists: SpotifyArtist[];
  name: string;
  uri: string;
}

interface SpotifyArtist {
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifySearchResult {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: SpotifyTrack[];
}

export interface SearchResultJson extends SpotifySearchResult {
  tracks: SpotifySearchResult;
}

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private readonly clientId = ''; // Don't forget to delete when pushing
  private readonly clientSecret = '';
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

  searchTracks(searchQuery: string): Observable<SearchResultJson> {
    return this.getAuthToken().pipe(
      switchMap(() => this.makeSearchRequest(searchQuery)),
      catchError((error) => throwError(() => error))
    );
  }

  private makeSearchRequest(
    searchQuery: string
  ): Observable<SearchResultJson> {
    const headers = this.createHeaders();
    const params = new HttpParams().set('q', searchQuery).set('type', 'track');

    return this.http.get<SearchResultJson>(
      `https://api.spotify.com/v1/search`,
      { headers, params }
    );
  }
}
