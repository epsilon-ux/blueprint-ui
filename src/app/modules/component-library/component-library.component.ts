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
        route: './table',
        text: 'Table',
      },
      {
        route: './search',
        text: 'Search',
      },
    ]
  };

  constructor() {}

}
