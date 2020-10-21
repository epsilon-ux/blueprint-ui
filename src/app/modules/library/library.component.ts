import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html'
})
export class LibraryComponent {

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
            route: './foundations/voice-tone'
          },
          {
            text: 'Color',
            route: './foundations/color'
          },
          {
            text: 'Typography',
            route: './foundations/typography'
          },
          {
            text: 'Icons',
            route: './foundations/icons'
          }
        ]
      },
      {
        text: 'Code Standards',
        children: [
          {
            text: 'General',
            route: './code-standards/general'
          },
          {
            text: 'HTML',
            route: './code-standards/html'
          },
          {
            text: 'CSS',
            route: './code-standards/css'
          },
          {
            text: 'JavaScript',
            route: './code-standards/javascript'
          },
          {
            text: 'Angular',
            route: './code-standards/angular'
          },
          {
            text: 'DevOps',
            route: './code-standards/devops'
          }
        ]
      },
      {
        text: 'Components',
        children: [
          {
            text: 'Badge',
            route: './components/badge'
          },
          {
            text: 'Breadcrumbs',
            route: './components/breadcrumbs'
          },
          {
            text: 'Buttons & Links',
            route: './components/buttons-links'
          },
          {
            text: 'Pie Chart',
            route: './components/pie-chart'
          },
          {
            text: 'Line Chart',
            route: './components/line-chart'
          },
          {
            text: 'Checkbox',
            route: './components/checkbox'
          },
          {
            text: 'Collapsible Panel',
            route: './components/collapsible-panel'
          },
          {
            text: 'Date & Time Picker',
            route: './components/date-time-picker'
          },
          {
            text: 'Dropdown',
            route: './components/dropdown'
          },
          {
            text: 'Header',
            route: './components/header'
          },
          {
            text: 'Landing Page Header',
            route: './components/landing-page-header'
          },
          {
            text: 'Loading Indicator',
            route: './components/loading-indicator'
          },
          {
            text: 'Logo',
            route: './components/logo'
          },
          {
            text: 'Multi-select',
            route: './components/multi-select'
          },
          {
            text: 'Pagination',
            route: './components/pagination'
          },
          {
            text: 'Panel',
            route: './components/panel'
          },
          {
            text: 'Progress Bar',
            route: './components/progress-bar'
          },
          {
            text: 'Radio Button',
            route: './components/radio-button'
          },
          {
            text: 'Ribbon',
            route: './components/ribbon'
          },
          {
            text: 'Search',
            route: './components/search'
          },
          {
            text: 'Secondary Navigation',
            route: './components/nav-secondary'
          },
          {
            text: 'Select',
            route: './components/select'
          },
          {
            text: 'Status Indicator',
            route: './components/status-indicator'
          },
          {
            text: 'Table',
            route: './components/table'
          },
          {
            text: 'Tile',
            route: './components/tile'
          },
          {
            text: 'Toggle',
            route: './components/toggle'
          },
          {
            text: 'Toggletip',
            route: './components/toggletip'
          }
        ]
      },
      {
        text: 'Templates',
        children: [
          {
            text: 'Object Page Header',
            route: './templates/object-page-header'
          },
          {
            text: 'Primary Navigation',
            route: './templates/nav-primary'
          },
          {
            text: 'Table Filters',
            route: './templates/table-filters'
          }
        ]
      }
    ]
  };

  constructor() { }

}