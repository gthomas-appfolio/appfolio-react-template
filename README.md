# Appfolio JS app template

This template can be used directly for the creation of new JavaScript apps in APM.

Can be forked directly, but also used as the base template of [generator-appfolio-js](https://github.com/gthomas-appfolio/generator-appfolio-js) Yeoman generator.

![Dependency Tracker](https://img.shields.io/david/gthomas-appfolio/appfolio-js-template.svg "Dependency Tracker") 
![Dependency Tracker](https://img.shields.io/david/dev/gthomas-appfolio/appfolio-js-template.svg "Dev Dependency Tracker")

----

### Setup

    npm install

### Develop

    npm run
Open [http://localhost:8080](http://localhost:8080) in browser

- Uses [hot-module-replacement](https://webpack.github.io/docs/hot-module-replacement.html) to automatically rebuild and reload modules.

### Test

    npm test

- Runs unit tests using [Mocha](https://mochajs.org/)
- Runs headless browser tests using Mocha and [Nightmare](http://www.nightmarejs.org/)
- Shows code coverage using [nyc/Istanbul](https://github.com/istanbuljs/nyc).
  A coverage report will also be written in the `./coverage/` directory.

### Lint

    npm run lint

- Runs [ESLint](http://eslint.org/) using [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) as the base configuration

----

### Contributors
- Gary Thomas
- Li Zhang
- Michael Jewell
- Aaron Panchal