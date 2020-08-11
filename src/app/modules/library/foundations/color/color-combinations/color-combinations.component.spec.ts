import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCombinationsComponent } from './color-combinations.component';

describe('ColorCombinationsComponent', () => {
  let component: ColorCombinationsComponent;
  let fixture: ComponentFixture<ColorCombinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorCombinationsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});