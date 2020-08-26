import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongArtistComponent } from './song-artist.component';

describe('SongArtistComponent', () => {
  let component: SongArtistComponent;
  let fixture: ComponentFixture<SongArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
