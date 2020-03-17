import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VoiceToneComponent } from './voice-tone.component';

@NgModule({
  declarations: [
    VoiceToneComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [VoiceToneComponent]
})
export class VoiceToneLibraryModule { }
