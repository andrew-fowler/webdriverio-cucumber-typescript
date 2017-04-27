## Summary

This is a basic example of Webdriverio + Cucumberjs + Typescript usage.

## Getting Started

### Requirements

Local Chrome browser, or Saucelabs account.
Node v4.8.0+

### Installation

- `npm install`

### Execution

#### Saucelabs

To execute across Saucelabs, set the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

Note that you aren't required to create a Sauce Connect tunnel, this will be handled automatically.

Run `npm run test-sauce`

#### Local

Run `npm run test-local`

## Configuration

`tsconfig.json` defines the `outDir` where Typescript will transpile to.  This directory is auto-deleted by the `npm test-*` commands after execution, so ensure that this doesn't correlate to a directory you require.

`conf/local.conf.js` and `conf/saucelabs.conf.js` define the configuration of webdriverio.  
- `specs: [...]` defines matchers for the cucumber feature files to run as default.  
- `suites: {...}` defines named matcher sets for different suite types (e.g. smoke, login, etc.)
- `services` and `capabilities` define the nature of the selenium execution.  Most commonly support local (standalone) execution or Saucelabs.
- `baseUrl:` defines the default/base URL to use for the tests.  This is most commonly the landing URL for the desired environment & app.
- `require: [...]` defines the matchers for the step definitions to use in the run.

For more information on configuration, see http://webdriver.io/guide/testrunner/configurationfile.html

# TO DO

- Put all config files into /config
