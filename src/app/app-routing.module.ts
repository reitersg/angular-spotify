import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongArtistComponent } from './song-artist/song-artist.component';
import { SongArtistResolver } from './song-artist/song-artist.resolver';
import { FeatureArtistComponent } from './feature-artist/feature-artist.component';
import { HomeComponent } from './home/home.component';
import { FeatureArtistResolver } from './feature-artist/feature-artist.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'song-artist',
    component: SongArtistComponent,
    resolve: {
      songs: SongArtistResolver,
    },
  },
  {
    path: 'feature-artist',
    component: FeatureArtistComponent,
    resolve: {
      songs: FeatureArtistResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SongArtistResolver, FeatureArtistResolver],
})
export class AppRoutingModule {}
