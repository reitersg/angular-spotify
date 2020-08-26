import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavigationComponent } from './navigation/navigation.component';
import { SongArtistComponent } from './song-artist/song-artist.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { FeatureArtistComponent } from './feature-artist/feature-artist.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SongArtistComponent,
    FeatureArtistComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgxGraphModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
