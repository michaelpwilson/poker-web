import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTourneyComponent } from './tourney.component';

describe('SharedTourneyComponent', () => {
  let component: SharedTourneyComponent;
  let fixture: ComponentFixture<SharedTourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedTourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
