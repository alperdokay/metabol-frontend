import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReactionResultsComponent } from './dialog-reaction-results.component';

describe('DialogReactionResultsComponent', () => {
  let component: DialogReactionResultsComponent;
  let fixture: ComponentFixture<DialogReactionResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogReactionResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReactionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
