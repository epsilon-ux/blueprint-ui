import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarPunctuationComponent } from './grammar-punctuation.component';

describe('GrammarPunctuationComponent', () => {
  let component: GrammarPunctuationComponent;
  let fixture: ComponentFixture<GrammarPunctuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrammarPunctuationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarPunctuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});