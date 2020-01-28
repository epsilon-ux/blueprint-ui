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

  // TODO: Uncommment when adding search
  /* filteredComponents = [...this.components];
  searchComponents(e) {
    this.filteredComponents = this.components.filter(component => (
        component.text.toLowerCase().includes(e.toLowerCase())
      )
    );
  }

  clearSearch(e) {
    this.filteredComponents = [...this.components];
  } */

  constructor() {}

}
