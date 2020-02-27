import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggletipComponent } from './toggletip.component';

describe('ToggletipComponent', () => {
  let component: ToggletipComponent;
  let fixture: ComponentFixture<ToggletipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggletipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggletipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
