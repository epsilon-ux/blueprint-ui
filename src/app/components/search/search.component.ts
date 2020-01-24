import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  isSearching = false;

  constructor() {}

  ngOnInit() {}

  handleSearch(e) {
    console.log(e);
  }

  handleClearSearch(e) {
    console.log(e);
  }
}
