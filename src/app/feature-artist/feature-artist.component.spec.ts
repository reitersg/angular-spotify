import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureArtistComponent } from './feature-artist.component';

describe('FeatureArtistComponent', () => {
  let component: FeatureArtistComponent;
  let fixture: ComponentFixture<FeatureArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
