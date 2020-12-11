import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTooltipComponent } from './chart-tooltip.component';

describe('ChartTooltipComponent', () => {
  let component: ChartTooltipComponent;
  let fixture: ComponentFixture<ChartTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartTooltipComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});