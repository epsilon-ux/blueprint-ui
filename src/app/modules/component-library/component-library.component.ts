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
        text: 'Introduction',
        route: './overview',
      },
      {
        text: 'Small Components',
        children: [
          {
            text: 'Buttons & Links',
            route: './buttons-links',
          },
          {
            text: 'Search',
            route: './search',
          },
          {
            text: 'Toggletip',
            route: './toggletip',
          }
        ]
      },
      {
        text: 'Medium Components',
        children: [
          {
            text: 'Landing Page Header',
            route: './landing-page-header',
          },
          {
            text: 'Secondary Navigation',
            route: './nav-secondary',
          }
        ]
      },
      {
        text: 'Large Components',
        children: [
          {
            text: 'Table',
            route: './table',
          }
        ]
      }
    ]
  };

  constructor() {}

}
