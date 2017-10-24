# Todos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## How I did it

 * inspirer de l'architecture fichier du theme angle
 * suivi du tuto [Medium - Front end hacking](https://medium.com/front-end-hacking/managing-state-in-angular-apps-with-ngrx-store-and-ngrx-effects-part-1-a878addba622)
 * passage de css a scss : renomer tout les fichiers, `ng set default.styleExt=scss`, (ou eb globall `ng set defaults.styleExt=scss --global`)
 * ajout de bootstrap : dans `/src/styles.scss`, `$enable-flex: true;
@import "../node_modules/bootstrap/scss/bootstrap";`
 * ajout de font-awesome 1 dans `/src/assets/styles/_variables.scss` `$fa-font-path: '../../../node_modules/font-awesome/scss/font-awesome'`
 * ajout de font-awesome 2 dans `/src/styles.scss` `@import './assets/styles/variables'; @import '../node_modules/font-awesome/scss/font-awesome';` (non fonctionnel, import en css)
  * ajout de font-awesome 2 dans `/src/styles.scss` `@import './assets/styles/variables'; @import '../node_modules/font-awesome/css/font-awesome.css';` (non fonctionnel, import en css)

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Reste a faire

 * edit
 * filtre