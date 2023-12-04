import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, switchMap, forkJoin } from 'rxjs';
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
  name: string,
  uri:string
  // ... include other properties as needed
}

interface SpotifyArtist {
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  // ... include other properties as needed
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

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private clientId = ""; // Don't forget to delete when pushing
  private clientSecret = ""
  private accessToken: string | null = null;

  constructor(private http: HttpClient) {}

  private getAuthToken(): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`), // Base64 encode clientId:clientSecret
    });
    const body = 'grant_type=client_credentials';

    return this.http
      .post<any>('https://accounts.spotify.com/api/token', body, { headers })
      .pipe(
        map((response) => response.access_token),
        catchError((error) => throwError(error))
      );
  }

  fetchTrack(trackId: string): Observable<any> {
    if (!this.accessToken) {
      return this.getAuthToken().pipe(
        switchMap((token) => {
          this.accessToken = token;
          return this.makeTrackRequest(trackId);
        }),
        catchError((error) => throwError(error))
      );
    } else {
      return this.makeTrackRequest(trackId);
    }
  }

  private makeTrackRequest(trackId: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });

    const trackRequest = this.http.get(
      `https://api.spotify.com/v1/tracks/${trackId}`,
      { headers }
    );
    const audioFeaturesRequest = this.http.get(
      `https://api.spotify.com/v1/audio-features/${trackId}`,
      { headers }
    );

    return forkJoin([trackRequest, audioFeaturesRequest]).pipe(
      map(([trackResponse, audioFeaturesResponse]) => {
        return { track: trackResponse, audioFeatures: audioFeaturesResponse };
      }),
      catchError((error) => throwError(error))
    );
  }

  searchTracks(searchQuery: string): Observable<any> {
    if (!this.accessToken) {
      return this.getAuthToken().pipe(
        switchMap((token) => {
          this.accessToken = token;
          return this.makeSearchRequest(searchQuery);
        }),
        catchError((error) => throwError(error))
      );
    } else {
      return this.makeSearchRequest(searchQuery);
    }
  }

  private makeSearchRequest(searchQuery: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });
    
    const params = new HttpParams().set('q', searchQuery).set('type', 'track');
    return this.http.get<SpotifySearchResult>(`https://api.spotify.com/v1/search`, { headers, params })
      .pipe(catchError((error) => throwError(error)));
  }
}
