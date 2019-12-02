# Repl.it Scraper

[Repl.it](https://repl.it/) scraper built with [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) ([Selenium](https://www.seleniumhq.org/) for [Node.js](https://nodejs.org/)).

Initial code from [`webdriverjs-recipes`](https://github.com/remarkablemark/webdriverjs-recipes).

Used by [Random Repl](https://repl.it/talk/share/Random-Repl/23297).

## Prerequisites

- [Node.js 12+](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

## Installation

Clone repository:

```sh
$ git clone https://github.com/remarkablegames/repl.it-scraper.git
$ cd repl.it-scraper
```

If you're using [nvm](https://github.com/nvm-sh/nvm), you can set your node version:

```sh
$ nvm use
```

Install dependencies:

```sh
$ npm install
```

## Scripts

## Available Scripts

In the project directory, you can run:

### `npm start`

Opens a Chrome browser, finds the list of top contributors on the homepage, and gets the links of their pinned/most recent repls.

### `npm run clean`

Removes JSON files in `output` folder.

## License

MIT
