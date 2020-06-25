import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['../table-filters.component.scss']
})
export class OverviewComponent implements OnInit {
  isSearching = false;

  constructor() { }

  ngOnInit() { }

  handleSearch(e) { }

  handleClearSearch(e) { }

  handleMulti(e) { }
}
