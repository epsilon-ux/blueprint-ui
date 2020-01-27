import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = '';
  isNavCollapsed = false;

  components = [
    {
      pageTitle: 'Table Component',
      route: 'components/table',
      text: 'Table',
    },
    {
      pageTitle: 'Search Component',
      route: 'components/search',
      text: 'Search',
    },
  ];
  filteredComponents = [...this.components];

  constructor() {}

  handleRoute(link) {
    this.pageTitle = link.pageTitle || 'Blueprint Component Library';
  }

  searchComponents(e) {
    this.filteredComponents = this.components.filter(component => (
        component.text.toLowerCase().includes(e.toLowerCase())
      )
    );
  }

  clearSearch(e) {
    this.filteredComponents = [...this.components];
  }

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }
}
