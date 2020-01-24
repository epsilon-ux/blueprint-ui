import { Component } from '@angular/core';

@Component({
  selector: 'app-componentList',
  templateUrl: './componentList.component.html',
  styleUrls: ['./componentList.component.scss']
})
export class ComponentListComponent {
  components = [
    {
      route: 'table',
      text: 'Table'
    },
    {
      route: 'search',
      text: 'Search'
    },
  ];
  filteredComponents = [...this.components];

  constructor() {}

  searchComponents(e) {
    this.filteredComponents = this.components.filter(component => (
        component.text.toLowerCase().includes(e.toLowerCase())
      )
    );
  }

  clearSearch(e) {
    this.filteredComponents = [...this.components];
  }
}
