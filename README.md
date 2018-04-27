# Angular Starter

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0-rc.2.

* Addons: 
    - [X] Ngrx state management
    - [X] Stylelint scss config
    - [X] Base scss style files
    - [X] Normalize.css
    - [X] Tailwind CSS Integration (Utility-first css architecture)
    - [X] lint.sh - run all linters in one go - convinience utility
    - [X] Main page with responsive, mobile optimised left drawer
    - [X] Nice, clean login page
    - [X] Working Authentication (only client side, with auth service)
    - [X] Token management (stored in local storage and ngrx store, survives browser refreshes)
    - [X] Working logout option
    - [X] About, NotFound pages
    - [ ] Test cases - In Progress


## Adding new module:

`ng generate module <module-name> -m app --spec --routing`

## Adding new component inside a module:

`cd src/app/<module-name>`

`ng g component login -m <module-name>`

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
This will also run tailwing command line to generate utility styles.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

