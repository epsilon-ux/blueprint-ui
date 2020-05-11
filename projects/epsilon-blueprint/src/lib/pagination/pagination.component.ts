import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

import { parseLookupString } from '../../helpers';

@Component({
  selector: 'bp-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

// This component only handles the actual pagination part of the table,
// the actual rows and rendering is handled by the table component
export class PaginationComponent implements OnInit, OnChanges {
  parseLookupString = parseLookupString;

  @Input()
  totalRecords: number;

  @Input()
  defaultNumberOfRows: number;

  @Input()
  pageBuffer = 1;

  @Input()
  pageNumber: number;

  @Output()
  pageData = new EventEmitter();

  totalPages: number;
  currentPage = 1;
  pageButtons = [];
  numberOfRows = 10;
  indeces = {
    start: 0,
    end: this.defaultNumberOfRows - 1
  };

  @Input()
  internationalization= {
    'numResults results': '#{numResults} result(s)',
    'Number of Rows': 'Number of Rows per Page',
    'First Page': 'First Page',
    'Previous Page': 'Previous Page',
    'Next Page': 'Next Page',
    'Last Page': 'Last Page',
    'Number Of Rows Options': [
      { optionText: '10 rows', optionValue: 10 },
      { optionText: '25 rows', optionValue: 25 },
      { optionText: '50 rows', optionValue: 50 },
      { optionText: '100 rows', optionValue: 100 }
    ]
  };

  constructor() {}

  ngOnInit() {
    this.numberOfRows = this.defaultNumberOfRows;
  }

  ngOnChanges(changes) {
    // Select the first page when the data changes
    if (changes.totalRecords) {
      this.paginate(1);
    }

    // Handles when page needs to eb changed from parent component
    if (
      changes.pageNumber &&
      changes.pageNumber.currentValue &&
      changes.pageNumber.currentValue !== this.currentPage
    ) {
      this.paginate(changes.pageNumber.currentValue);
    }
  }

  paginate(page: number) {
    this.totalPages = this.getTotalPages();
    this.indeces.start = (this.currentPage - 1) * this.numberOfRows;
    this.indeces.end = this.indeces.start + this.numberOfRows;
    this.changePage(page);
  }

  isStepperDisabled(selectedPage: number): boolean {
    return this.currentPage === selectedPage ? true : false;
  }

  rowChangePage(page) {
    this.currentPage = Math.floor(this.indeces.start / this.numberOfRows) + 1 || 1;
    this.paginate(this.currentPage);
  }

  // Determines the numbers to show in pagination
  changePage(page: number): void {
    this.currentPage = page;
    this.pageButtons = [];

    if (this.currentPage - this.pageBuffer <= 1) {
      for (
        let i = 1;
        this.pageButtons.length <= this.pageBuffer * 2 && i <= this.totalPages;
        i++
      ) {
        this.pageButtons.push(i);
      }
    } else if (this.currentPage + this.pageBuffer >= this.totalPages) {
      for (
        let i = this.totalPages;
        this.pageButtons.length <= this.pageBuffer * 2 && i >= 1;
        i--
      ) {
        this.pageButtons.push(i);
      }
      this.pageButtons.reverse();
    } else {
      for (
        let i = this.currentPage - this.pageBuffer;
        this.pageButtons.length <= this.pageBuffer * 2 && i <= this.totalPages;
        i++
      ) {
        this.pageButtons.push(i);
      }
    }

    // Sends the current page and number of rows back to table to let the table handle determining the rows
    this.pageData.emit({
      currentPage: this.currentPage,
      rowsPerPage: this.numberOfRows
    });
  }

  getTotalPages() {
    return Math.ceil(this.totalRecords / this.numberOfRows);
  }
}
