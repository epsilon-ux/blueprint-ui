import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  isSearching = false;
  queryValue: string;

  constructor() { }

  ngOnInit(): void { }

  handleSearch(): void { }

  handleClearSearch(): void { }

}