import { SongArtistService } from './song-artist.service';
import { GraphService } from './../graph.service';
import { Observable, of, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { map, concatMap, tap } from 'rxjs/operators';

@Injectable()
export class SongArtistResolver implements Resolve<any> {
  constructor(
    private graphService: GraphService,
    private songService: SongArtistService
  ) {}

  resolve(
    router: ActivatedRouteSnapshot,
    rstate: RouterStateSnapshot
  ): Observable<any> {
    const songs = this.graphService
      .getSongsByArtist('6l3HvQ5sa6mXTsMTB19rO5', 'primary')
      .pipe(concatMap((songs) => of(this.songService.processSongs(songs))));

    return songs;
    // return forkJoin(song, artist).pipe(
    //   map(([songResults, artistResults]) => ({
    //     song: songResults,
    //     artist: artistResults,
    //   }))
    // );
  }
}
