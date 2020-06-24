import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['../table-filters.component.scss']
})
export class UsageComponent implements OnInit {
  isSearching = false;

  // date range select options
  dateOptions = [
    {
      text: 'Today',
      range: 'MM/DD/YYYY'
    },
    {
      text: 'Yesterday',
      range: 'MM/DD/YYYY'
    },
    {
      text: 'Last 3 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Last 7 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Current Week',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Last 30 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Last 60 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    },
    {
      text: 'Last 90 Days',
      range: 'MM/DD/YYYY - MM/DD/YYYY'
    }
  ];
  selectedDateRange;

  // generic options used for types, tags, events, and marketing multi-selects
  optionItems = [
    {
      label: 'Option 1',
      value: 'option1'
    },
    {
      label: 'Option 2',
      value: 'option2'
    },
    {
      label: 'Option 3',
      value: 'option3'
    },
    {
      label: 'Option 4',
      value: 'option4'
    }
  ];
  selectedOptions;

  // status multi-select options
  optionStatuses = [
    {
      label: 'Complete',
      value: 'complete'
    },
    {
      label: 'Incomplete Primary',
      value: 'incomplete-primary'
    },
    {
      label: 'Incomplete Secondary',
      value: 'incomplete-secondary'
    },
    {
      label: 'Warning',
      value: 'warning'
    }
  ];
  selectedStatuses;

  // events sort by filter
  sortByOptions = [
    {
      text: 'Create Date'
    },
    {
      text: 'Modified Date'
    },
    {
      text: 'Program Name'
    },
    {
      text: 'Schedule Date'
    },
    {
      text: 'Status'
    }
  ];
  selectedSortOption = this.sortByOptions[1];

  // generic toggles
  toggleButtons = [
    {
      id: 't1',
      text: 'Toggle 1',
      value: 't1',
      isChecked: true
    },
    {
      id: 't2',
      text: 'Toggle 2',
      value: 't2'
    }
  ];

  // events table/list toggles
  listView = false;
  viewToggles = [
    {
      id: 'table',
      text: 'Table',
      value: 'table',
      isChecked: true
    },
    {
      id: 'list',
      text: 'List',
      value: 'list'
    }
  ];

  // messaging current/archive toggles
  currentArchiveToggles = [
    {
      id: 'currentArchive1',
      text: 'Current',
      value: 'currentArchive1',
      isChecked: true
    },
    {
      id: 'currentArchive2',
      text: 'Archive',
      value: 'currentArchive2'
    }
  ];

  constructor() { }

  ngOnInit() { }

  handleSearch(e) { }

  handleClearSearch(e) { }

  handleMulti(e) { }

  toggleView(e) {
    if(e.target.value === 'list') {
      this.listView = true;
    } else {
      this.listView = false;
    }
  }

  click = (e) => {};
}