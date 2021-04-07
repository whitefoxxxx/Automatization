const I = actor();

module.exports = {
  elements: {
    profile: ".user-pic__image",
    logout: '//ul[@class="menu__group"]/li[5]',
  },

  async logout() {
    await I.waitForVisible(this.elements.profile, 5);
    await I.click(this.elements.profile);
    await I.waitForVisible(this.elements.logout);
    await I.click(this.elements.logout);
  },

  async isUser() {
    await I.waitForVisible(this.elements.profile, 5);
    await I.click(this.elements.profile);
    let prof = I.grabTextFrom(this.elements.login);
    return prof;
  },
  async isLogoutPage() {
    await I.seeInCurrentUrl("https://passport.yandex.by/auth");
  },
};
