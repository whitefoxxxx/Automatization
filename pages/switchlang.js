const I = actor();
const expect = require("expect");

module.exports = {
  elements: {
    lang:
      "//div[@class='dropdown2 dropdown2_switcher_elem i-bem']/a[@class='home-link i-bem dropdown2__switcher home-link_black_yes']",
    more: "//span[.='ещё']",
    list:
      "//div[@class='select option__select select_size_m select_theme_normal i-bem select_js_inited']/button",
    save:
      "//button[@class='button form__save button_theme_action button_size_m i-bem button_js_inited']/span[@class='button__text']",
    ukr: "//div[@class='dropdown2 dropdown2_switcher_elem i-bem']/a[.='Ukr']",
  },

  async switchLang() {
    I.waitForVisible(this.elements.lang, 5);
    I.click(this.elements.lang);
    I.waitForVisible(this.elements.more, 5);
    I.click(this.elements.more);
    await I.waitForVisible(this.elements.list, 5);
    I.click(this.elements.list);
    I.selectOption("intl", "uk");
    I.forceClick("//div[@class='div page-views']");
    I.click(this.elements.save);
  },

  async isUkr() {
    I.waitForVisible(this.elements.ukr, 5);
  },
};
