const I = actor();
const expect = require("expect");

module.exports = {
  elements: {
    mess: `//div[.='Неверный пароль']`,
  },

  async message() {
    I.waitForVisible(this.elements.mess, 5);
  },
};
