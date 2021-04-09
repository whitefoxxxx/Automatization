const I = actor();
const expect = require("expect");

module.exports = {
  elements: {
    loginInput: "#passp-field-login",
    sign:
      '//button[@class="Button2 Button2_size_l Button2_view_action Button2_width_max Button2_type_submit"]/span',
    mess: `//div[.='Такого аккаунта нет']`,
  },

  async inputLogin(loginn) {
    await I.switchToNextTab();
    await I.waitForElement(this.elements.loginInput, 10);
    await I.fillField(this.elements.loginInput, loginn);
    await I.click(this.elements.sign);
  },

  async message() {
    I.waitForVisible(this.elements.mess, 5);
  },
};
