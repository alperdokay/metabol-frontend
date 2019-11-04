import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPathwayVisualizationComponent } from './dialog-pathway-visualization.component';

describe('DialogPathwayVisualizationComponent', () => {
  let component: DialogPathwayVisualizationComponent;
  let fixture: ComponentFixture<DialogPathwayVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPathwayVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPathwayVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
