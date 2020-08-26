import { SongArtistService } from './song-artist.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-artist',
  templateUrl: './song-artist.component.html',
  styleUrls: ['./song-artist.component.scss'],
})
export class SongArtistComponent implements OnInit {
  songs: Object;
  constructor(private route: ActivatedRoute) {
    this.songs = this.route.snapshot.data.songs;
    console.log(this.songs);
  }

  ngOnInit(): void {}
}
