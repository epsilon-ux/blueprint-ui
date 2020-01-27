# Epsilon Blueprint

You can see in progress and upcoming work on our [blueprint trello board](https://trello.com/b/AoJ0Tpd2/blueprint).

## Setup & Installation

This package has a few dependencies not included in the pacakge itself. They are as follows.

- Bootstrap v4
- FontAwesome 5
- Up to date stylesheets from the UX Team

Once you have all these, you can run `npm install epsilon-blueprint` to install the package to your node_modules.


# Table

## Table Input
See the API section for further details on each table input.
```ts
data: Object[];

isDataLoading: boolean;

properties: {
  data: {
    thead: {
      key: string,
      headerText: string,
      isColumnDisplayed: boolean,
      type: ColumnType
    }[];
    rowId: string;
  };
  search:  {
    hasSearch: boolean;
    // TBD: Server Side / Client Side / Restricted
  };
  sort: {
    defaultSortedColumn: string;
    // TBD: Server Side / Client Side / Restricted
  };
  hasSelectableRows: boolean;
  statusIndicatorMapping?: {
    'incomplete-primary': string;
    'incomplete-secondary': string;
    'in-progress': string;
    'warning': string;
    'complete': string;
  };
  link: {
    element: string; // Expect 'a' or 'button'
    ariaLabel: string; // Can use ${key} syntax to insert values from the row corresponding to the given key
    target?: string; // The target of the link, e.g. "_blank" to open in a new tab
    path?: string; // Required if element = 'a'
    action?: string; // Required if element = 'button'
  };
  actions: {
    text: string;
    element: string; // Expect 'a' or 'button'
    ariaLabel: string; // Can use ${key} syntax to insert values from the row corresponding to the given key
    class: string;
    target?: string; // The target of the link, e.g. "_blank" to open in a new tab
    path?: string; // Required if element = 'a'
    action?: string; // Required if element = 'button'
  }[];
  hasColumnSelector: boolean;
  hasDisplayDensity: boolean;
  pagination: {
    hasPagination: boolean;
    // TBD: Server Side / Client Side / Restricted 
  };
};
```


## API

### Inputs

Input | Type | Description
------|------|------------
data | object[] | An array of objects where each object represents a row in the table.
isDataLoading | boolean | `true` if the data is still loading. While this is `true` a spinner will appear inside the table. If this is `false` and there is still no data, a no data message will be displayed.
properties | object | An object used to configure an instance of the table. This is where optional features are enabled or disabled. The below table gives more detail.

#### Properties
Property | Type | Description
---------|------|------------
data.thead | object[] | An array of all the column headers.
data.thead.key | string | The key from the inputted data to use for data in that column.
data.thead.headerText | string | The text to display in that column header.
data.thead.isColumnDisplayed | boolean | `true` if this column should be displayed by default.
data.thead.type | enum ColumnType *{ ID, TEXT, LINK, DATE, BOOLEAN, INPUT, STATUS, DROPDOWN }* | The type of the column. This determines how to handle the content.
data.rowId | string | The key from the data to use as the identifier.
search.hasSearch | boolean | `true` if search is enabled for the table. Setting to `true` will render a search bar above the table.
sort.defaultSortedColumn | string | The key from the data that represents the column that is sorted by default / on page load. This column that is sorted by default cannot be hidden with the column selector.
hasSelectableRows | boolean | `true` to enable the selectable rows feature.
statusIndicatorMapping | object | Maps the standardized class names for status indicators to the product specific text. The available classes for mapping are `incomplete-primary, incomplete-secondary, in-progress, warning, complete`. For more information on status indicators see [Zeplin](https://zpl.io/anLnePv).
link.element | string | Expects either `a` or `button`. Use `a` when the link column should route to another part of the application. Use `button` when the link column should perform an action on the page, e.g. opens a modal.
link.ariaLabel | string | The format of the aria label to be used for the link. To use values from the row, insert `${key}` anywhere into the string where 'key' is the name of the data property to insert into the label, e.g. `'Open row ${id}'` _NOTE: These are still regular strings, not javascript template strings, so use single/double quotes._
link.target | string | Required when element = 'a'. The string to be used in the link's target attribute, e.g. "_blank" opens in a new tab.
link.path | string | Required when element = 'a'. The string to be used in the link's routerLink attribute.
link.action | string | Required if element = 'button'. The string to be emitted when the button is clicked. See outputs for more information on what is emitted.
actions | object[] | An array of objects where each object represents a button in the actions column. When there are more than 3 actions, the buttons collapse into a dropdown.
actions.element | string | Expects either `a` or `button`. Use `a` when the action should route to another part of the application. Use `button` when the action should perform an action on the page, e.g. opens a modal.
actions.text | string | The text to be used in the action button/link.
actions.ariaLabel | string | The format of the aria label to be used for the button/link. To use values from the row, insert `${key}` anywhere into the string where 'key' is the name of the data property to insert into the label, e.g. `'Open row ${id}'` _NOTE: These are still regular strings, not javascript template strings, so use single/double quotes._
actions.class | string | The class(es) to be used on the action button/link, e.g. `btn-outline-primary` _NOTE: `btn` will be included by default if element = 'btn'._
actions.target | string | Required when element = 'a'. The string to be used in the link's target attribute, e.g. "_blank" opens in a new tab.
actions.path | string | Required when element = 'a'. The string to be used in the link's routerLink attribute.
actions.action | string | Required if element = 'button'. The string to be emitted when the button is clicked. See outputs for more information on what is emitted.
hasColumnSelector | boolean | `true` if a column selector is enabled. Setting to `true` will add a column selector dropdown below the table.
hasDisplayDensity | boolean | `true` if display density feature is enabled. Setting to `true` will add a display density dropdown below the table. The user will be able to select either 'Comfortable' or 'Compact' which will make the row padding larger or smaller respectively.
hasPagination | boolean | `true` if pagination feature is enabled. Setting to `true` will add pagination below the table. This includes a dropdown to select the number of rows to display per page.


### Outputs

All outputs are emitted through the actions object. The type is below.
```ts
action: {
  action: string;
  id: string;
};
```
Whenever an action is triggered, the table emits an action object containing an action and an id. The action is a string used to know what action occurred. These strings are specified within the table inputs (see above). The id is the id of the row to which the action applies. Actions can occur when the user selects rows, clicks an element in the actions column, and/or clicks an element in the link column.


## Reach Out

If you find a bug, or would like a new feature added to the table, please reach out to the UX Team at ux-product@epsilon.com.

You can find more components in the [Blueprint Component Library](https://blueprint-storybook-angular.netlify.com).

You can find the guidelines and best practices for front-end web development at Epsilon in the [Product Engineering Front-End Code Standards](https://epsilon-ux.github.io/code-standards/).

You can find more resources in the [UX Space](https://epsilonjira.atlassian.net/wiki/spaces/UET/overview).

## Angular & Development

Run `ng build --watch epsilon-blueprint`, and once that has begun run `ng serve` concurrently to develop on the epsilon-blueprint package.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

### Code scaffolding

Run `ng generate component component-name --project epsilon-blueprint` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project epsilon-blueprint`.
> Note: Don't forget to add `--project epsilon-blueprint` or else it will be added to the default project in your `angular.json` file. 

### Build

Run `ng build epsilon-blueprint` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build epsilon-blueprint`, go to the dist folder `cd dist/epsilon-blueprint` and run `npm publish`.

### Running unit tests

Run `ng test epsilon-blueprint` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
