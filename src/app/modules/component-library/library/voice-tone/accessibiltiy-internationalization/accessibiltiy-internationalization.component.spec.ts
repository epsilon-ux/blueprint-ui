import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibiltiyInternationalizationComponent } from './accessibiltiy-internationalization.component';

describe('AccessibiltiyInternationalizationComponent', () => {
  let component: AccessibiltiyInternationalizationComponent;
  let fixture: ComponentFixture<AccessibiltiyInternationalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibiltiyInternationalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibiltiyInternationalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
