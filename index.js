const { Builder } = require('selenium-webdriver');

const CommonPage = require('./pages/common');
const HomePage = require('./pages/home');
const UserPage = require('./pages/user');

const { writeJson } = require('./util');

(async function() {
  let driver;

  try {
    driver = await new Builder().forBrowser('chrome').build();

    // go to home
    const common = new CommonPage(driver);
    await common.goToPage(HomePage.BASE_URL);

    // get user links
    const userLinks = await common.getLinks(HomePage.USER_LINKS_LOCATOR);
    await writeJson('users.json', userLinks);

    // get repl links
    let replLinks = [];

    for (let userLink of userLinks) {
      await common.goToPage(userLink);
      const userReplLinks = await common.getLinks(UserPage.REPL_LINKS_LOCATOR);
      replLinks = replLinks.concat(userReplLinks);
    }

    await writeJson('repls.json', replLinks);
  } catch (err) {
    console.error(err);
  } finally {
    await driver.quit();
  }
})();
