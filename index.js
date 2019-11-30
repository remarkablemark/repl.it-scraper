const { Builder } = require('selenium-webdriver');

const CommonPage = require('./pages/common');
const HomePage = require('./pages/home');
const UserPage = require('./pages/user');

(async function() {
  let driver;

  try {
    driver = await new Builder().forBrowser('chrome').build();

    const common = new CommonPage(driver);
    await common.goToPage(HomePage.BASE_URL);

    const userLinks = await common.getLinks(HomePage.USER_LINKS_LOCATOR);
    console.log(userLinks);

    for (let userLink of userLinks) {
      await common.goToPage(userLink);
      const replLinks = await common.getLinks(UserPage.REPL_LINKS_LOCATOR);
      console.log(replLinks);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await driver.quit();
  }
})();
