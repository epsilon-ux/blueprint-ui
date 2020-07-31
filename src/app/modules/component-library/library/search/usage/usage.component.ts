import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {

  isSearching = false;

  constructor() { }

  ngOnInit(): void { }

  handleSearch() { }

  handleClearSearch() { }

}