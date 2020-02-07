# Blueprint Ui

## Development

### Setup
1. Clone repository
1. `npm install`
1. `npm run generate-data` This will create mock data needed for components that consume data.

### Running the application
You will need to run `ng serve` (or `npm start`) concurrently with `ng build --watch epsilon-blueprint` if you intend on making changes to the Blueprint library. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Making Changes
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

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
