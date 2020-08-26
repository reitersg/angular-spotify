import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GraphService {
  constructor(private http: HttpClient) {}

  // getArtists(size, offset): Observable<any> {
  //   return this.http.get(`${environment.spotifyURL}/artists`);
  // }

  getArtistDetails(artistId: string): Observable<any> {
    return this.http.get(`${environment.spotifyURL}/artist/${artistId}`);
  }
  getSongDetails(songId: string): Observable<any> {
    return this.http.get(`${environment.spotifyURL}/song/${songId}`);
  }

  getSongsByArtist(artistId: string, featureType: string): Observable<any> {
    return this.http.get(
      `${environment.spotifyURL}/artist/${artistId}/songs?featureType=${featureType}`
    );
  }

  getSongsWithFeatureArtist(artistId: string): Observable<any> {
    return this.http.get(
      `${environment.spotifyURL}/artist/${artistId}/my_songs`
    );
  }
}
