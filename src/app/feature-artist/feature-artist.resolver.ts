import { SongArtistService } from '../song-artist/song-artist.service';
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
export class FeatureArtistResolver implements Resolve<any> {
  constructor(
    private graphService: GraphService,
    private songService: SongArtistService
  ) {}

  resolve(
    router: ActivatedRouteSnapshot,
    rstate: RouterStateSnapshot
  ): Observable<any> {
    const songs = this.graphService
      .getSongsWithFeatureArtist('6l3HvQ5sa6mXTsMTB19rO5')
      .pipe(
        concatMap((parentObj) =>
          of(this.songService.processFeatureArtists(parentObj))
        )
      );

    return songs;
    // return forkJoin(song, artist).pipe(
    //   map(([songResults, artistResults]) => ({
    //     song: songResults,
    //     artist: artistResults,
    //   }))
    // );
  }
}
