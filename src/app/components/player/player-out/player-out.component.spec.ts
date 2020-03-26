import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOutComponent } from './player-out.component';

describe('PlayerOutComponent', () => {
  let component: PlayerOutComponent;
  let fixture: ComponentFixture<PlayerOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
