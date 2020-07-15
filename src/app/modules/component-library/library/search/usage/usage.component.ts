import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent implements OnInit {

  isSearching = false;

  constructor() { }

  ngOnInit(): void { }

  handleSearch(e) { }

  handleClearSearch(e) { }

}