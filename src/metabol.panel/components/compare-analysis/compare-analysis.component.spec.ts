import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareAnalysisComponent } from './compare-analysis.component';

describe('CompareAnalysisComponent', () => {
  let component: CompareAnalysisComponent;
  let fixture: ComponentFixture<CompareAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
