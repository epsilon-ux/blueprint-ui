import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [SearchComponent],
  providers: []
})
export class SearchModule { }