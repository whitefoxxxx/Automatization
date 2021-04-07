const I = actor();
const expect = require("expect");

module.exports = {
  elements: {
    mailLink: "//div[@class='desk-notif-card__login-new-items']/a[2]/div[.='Почта']",
    loginInput: "#passp-field-login",
    passwordInput: "#passp-field-passwd",
    sign:
      '//button[@class="Button2 Button2_size_l Button2_view_action Button2_width_max Button2_type_submit"]/span',
    profile: ".user-pic__image",
    login: ".user-account__name",
  },

  async openMail() {
    await I.click(this.elements.mailLink);
  },

  async auth(login, password) {
    await I.switchToNextTab();
    await I.waitForElement(this.elements.loginInput, 10);
    await I.fillField(this.elements.loginInput, login);
    await I.click(this.elements.sign);
    await I.waitForVisible(this.elements.passwordInput, 5);
    await I.fillField(this.elements.passwordInput, password);
    await I.click(this.elements.sign);
  },

  async isUser() {
    await I.waitForVisible(this.elements.profile, 5);
    await I.click(this.elements.profile);
    let prof = I.grabTextFrom(this.elements.login);
    return prof;
  },
  async diff(login, loginus) {
    expect(login).toEqual(loginus);
  },
};
