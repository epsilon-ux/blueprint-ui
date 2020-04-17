# Blueprint Ui

[![Netlify Status](https://api.netlify.com/api/v1/badges/74d2d0bc-7d0d-430e-9114-88cd4d00f57e/deploy-status)](https://app.netlify.com/sites/epsilon-blueprint/deploys)

## Development

### Setup
1. Clone repository
1. `npm install -g gulp-cli` to install the Gulp cli. *Note: You may need local admin privileges on your machine to install packages globally (`-g`).*
1. `npm install`
1. `npm run generate-data` This will create mock data needed for components that consume data.

### Running the application
You will need to run `npm run dev` concurrently with `npm run watch-blueprint` if you intend on making changes to the Blueprint library. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Making changes
1. Create feature branch off of the latest master.
1. Make your feature changes.
1. Rebase if needed.
1. Push feature branch to origin.
1. Create pull request. Pull requests will then be reviewed and approved/declined.

**Remember to keep commits and pull requests as small as you can.**

## Angular Docs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng generate component component-name --project epsilon-blueprint` to generate a new component in the project. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project epsilon-blueprint`.
> Note: Don't forget to add `--project epsilon-blueprint` or else it will be added to the default project in your `angular.json` file. 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng build epsilon-blueprint` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng test epsilon-blueprint` to execute the unit tests on the project via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Component Definition of Done
- Feature complete
  - Accessibility attributes
  - Matches mockups
  - Responsive
  - Error handling (error states & messages)
  - Input validation e.g.: required
  - Tech debt should be marked with // TODO: comment
- No console errors
- Meets code standards
- Consistent and clean code formatting
- Passes accessibility testing
  - Keyboard
  - Screen reader
  - Browser extension
- Cross-browser tested
- Has been reviewed and feedback has been remediated
- Github/Netlify checks pass
- Documentation

### Long term additions
- Unit tests
