import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TileComponent } from './tile.component';

@NgModule({
  declarations: [TileComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TileComponent]
})
export class TileModule { }