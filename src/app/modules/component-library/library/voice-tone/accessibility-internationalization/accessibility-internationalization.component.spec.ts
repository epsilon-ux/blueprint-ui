import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityInternationalizationComponent } from './accessibility-internationalization.component';

describe('AccessibilityInternationalizationComponent', () => {
  let component: AccessibilityInternationalizationComponent;
  let fixture: ComponentFixture<AccessibilityInternationalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibilityInternationalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityInternationalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
