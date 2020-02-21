import { Component } from '@angular/core';

@Component({
  selector: 'app-component-library',
  templateUrl: './component-library.component.html',
  styleUrls: ['./component-library.component.scss']
})
export class ComponentLibraryComponent {

  components = {
    title: 'Components',
    items: [
      {
        route: './overview',
        text: 'Introduction',
      },
      {
        route: './landing-page-header',
        text: 'Landing Page Header',
      },
      {
        route: './nav-secondary',
        text: 'Secondary Nav'
      },
      {
        route: './search',
        text: 'Search',
      },
      {
        route: './table',
        text: 'Table',
      },
    ]
  };

  constructor() {}

}
