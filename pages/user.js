const HomePage = require('./home');

class UserPage {
  static REPL_LINKS_LOCATOR = { css: '.repl-item-wrapper' };

  /**
   * @param {string} link
   * @return {string}
   */
  static getUsernameFromLink(link) {
    return link.replace(HomePage.BASE_URL, '');
  }
}

module.exports = UserPage;
