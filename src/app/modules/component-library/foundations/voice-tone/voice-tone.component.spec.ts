import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceToneComponent } from './voice-tone.component';

describe('VoiceToneComponent', () => {
  let component: VoiceToneComponent;
  let fixture: ComponentFixture<VoiceToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoiceToneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});