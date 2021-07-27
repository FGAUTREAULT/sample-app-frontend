# Factory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Running dev proxy

To avoid CORS run <kbd>npm run start:proxy</kbd> with proxy.conf to redirect you to localhost:8080 where your WS API is deployed.

## Running build prod

To test prod build run <kbd>npm run test:prod</kbd> that will build your dist folder and run an http-server.

If you don't have http-server installed run <kbd>npm i http-server -g</kbd>.

Beware for simplification application will search complete <kbd>API_URL</kbd> from the localstorage for example<kbd>http://localhost:8080</kbd>, to contact the web services.

## Running with docker

Very easy with docker, Dockerfile contains everything to build and deploy against an nginx.

<pre>
docker build . -t interview/factory-frontend:latest
docker run --name frontend -d -p 4200:80 interview/factory-frontend:latest
</pre>

Run <kbd>docker ps</kbd> and you should see your frontend container running.

Open your browser and launch your app on <kbd>http://localhost:4200</kbd> as we redirected the ports to 4200.

Beware for simplification application will search complete <kbd>API_URL</kbd> from the localstorage for example<kbd>http://localhost:8080</kbd>, to contact the web services.
