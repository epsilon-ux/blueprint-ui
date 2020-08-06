import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { generateUniqueId } from '../../helpers';

@Component({
  selector: 'bp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // Label for search field
  @Input()
  label = 'Search';

  // Placeholder Text
  @Input()
  placeholder = 'Search';

  // Is the search is in progress?
  @Input()
  isSearching = false;

  @Input()
  searchQuery = '';

  @Input()
  bpID: string;

  @Output()
  searchQueryChange = new EventEmitter<string>();

  // Emit the search query string
  @Output()
  search = new EventEmitter<string>();

  // Emit when search is cleared
  @Output()
  clearSearch = new EventEmitter();

  showClearIcon = false;
  uuid: string;

  constructor() { }

  ngOnInit(): void {
    if(!this.bpID) {
      this.uuid = 'search' + generateUniqueId().toString();
    } else {
      this.uuid = this.bpID;
    }
  }

  onClearSearch(): void {
    this.searchQuery = '';
    this.showClearIcon = false;
    this.clearSearch.emit();
  }

  onSearch(): void {
    if (this.searchQuery.length > 0) {
      this.search.emit(this.searchQuery);
    }
  }

  inputController(event): void {
    this.searchQueryChange.emit(this.searchQuery);
    if (event.key === 'Enter' && this.searchQuery.length > 0) {
      this.showClearIcon = true;
      this.search.emit(this.searchQuery);
    } else if (
      (event.key === 'Backspace' || event.key === 'Delete')
      && this.searchQuery.length === 0
    ) {
      this.showClearIcon = false;
      this.clearSearch.emit();
    } else if (this.searchQuery.length > 0) {
      this.showClearIcon = true;
    } else {
      this.showClearIcon = false;
    }
  }

}