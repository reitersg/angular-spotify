import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-feature-artist',
  templateUrl: './feature-artist.component.html',
  styleUrls: ['./feature-artist.component.scss'],
})
export class FeatureArtistComponent implements OnInit {
  songs: Object;
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

  constructor(private route: ActivatedRoute) {
    this.songs = this.route.snapshot.data.songs;
  }

  ngOnInit(): void {
    this.fitGraph();
  }

  centerGraph() {
    this.center$.next(true);
  }

  fitGraph() {
    this.zoomToFit$.next(true);
  }
}
