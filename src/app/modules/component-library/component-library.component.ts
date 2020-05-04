import { Component } from '@angular/core';

@Component({
  selector: 'app-component-library',
  templateUrl: './component-library.component.html',
  styleUrls: ['./component-library.component.scss']
})
export class ComponentLibraryComponent {

  components = {
    items: [
      {
        text: 'Introduction',
        route: './introduction'
      },
      {
        text: 'Foundations',
        children: [
          {
            text: 'Voice & Tone',
            route: './voice-tone'
          },
          {
            text: 'Color',
            route: './color'
          },
          {
            text: 'Typography',
            route: './typography'
          },
          {
            text: 'Icons',
            route: './icons'
          }
        ]
      },
      {
        text: 'Small Components',
        children: [
          {
            text: 'Badge',
            route: './badge'
          },
          {
            text: 'Buttons & Links',
            route: './buttons-links'
          },
          {
            text: 'Checkbox',
            route: './checkbox'
          },
          {
            text: 'Date & Time Picker',
            route: './date-time-picker'
          },
          {
            text: 'Dropdown',
            route: './dropdown'
          },
          {
            text: 'Multiselect',
            route: './multiselect'
          },
          {
            text: 'Radio Button',
            route: './radio-button'
          },
          {
            text: 'Search',
            route: './search'
          },
          {
            text: 'Toggletip',
            route: './toggletip'
          }
        ]
      },
      {
        text: 'Medium Components',
        children: [
          {
            text: 'Landing Page Header',
            route: './landing-page-header'
          },
          {
            text: 'Secondary Navigation',
            route: './nav-secondary'
          }
        ]
      },
      {
        text: 'Large Components',
        children: [
          {
            text: 'Table',
            route: './table'
          }
        ]
      }
    ]
  };

  constructor() {}

}
