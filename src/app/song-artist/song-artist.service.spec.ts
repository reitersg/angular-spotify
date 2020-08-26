import { TestBed } from '@angular/core/testing';

import { SongArtistService } from './song-artist.service';

describe('SongArtistService', () => {
  let service: SongArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
