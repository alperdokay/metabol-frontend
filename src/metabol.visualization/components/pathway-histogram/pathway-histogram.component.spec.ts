import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathwayHistogramComponent } from './pathway-histogram.component';

describe('PathwayHistogramComponent', () => {
  let component: PathwayHistogramComponent;
  let fixture: ComponentFixture<PathwayHistogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathwayHistogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathwayHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
