import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSecondaryComponent } from './nav-secondary.component';

describe('NavSecondaryComponent', () => {
  let component: NavSecondaryComponent;
  let fixture: ComponentFixture<NavSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
