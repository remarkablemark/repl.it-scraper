class CommonPage {
  /**
   * @param {ThenableWebDriver} driver
   */
  constructor(driver) {
    this.driver = driver;
  }

  /**
   * @param {string} link
   */
  async goToPage(link) {
    await this.driver.get(link);
  }

  /**
   * @param {string} locator
   * @return {Promise<string[]>}
   */
  async getLinks(locator) {
    const elements = await this.driver.findElements(locator);
    let links = [];

    await Promise.all(
      elements.map(async element => {
        const link = await element.getAttribute('href');
        links.push(link);
      }),
    );

    return links;
  }
}

module.exports = CommonPage;
