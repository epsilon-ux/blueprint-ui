import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  components = {
    title: 'Components',
    items: [
      {
        route: './/table',
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
