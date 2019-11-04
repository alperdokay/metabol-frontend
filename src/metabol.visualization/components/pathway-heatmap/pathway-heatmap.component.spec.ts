import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathwayHeatmapComponent } from './pathway-heatmap.component';

describe('PathwayHeatmapComponent', () => {
  let component: PathwayHeatmapComponent;
  let fixture: ComponentFixture<PathwayHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathwayHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathwayHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
