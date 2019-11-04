import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarDiseasesComponent } from './similar-diseases.component';

describe('SimilarDiseasesComponent', () => {
  let component: SimilarDiseasesComponent;
  let fixture: ComponentFixture<SimilarDiseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarDiseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
