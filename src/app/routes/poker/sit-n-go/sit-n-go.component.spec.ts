import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitNGoComponent } from './sit-n-go.component';

describe('SitNGoComponent', () => {
  let component: SitNGoComponent;
  let fixture: ComponentFixture<SitNGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitNGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitNGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
