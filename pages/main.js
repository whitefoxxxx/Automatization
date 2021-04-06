const I = actor();
const expect = require("expect");

module.exports = {
  elements: {
    openPage: "https://yandex.by",
    geoLink: ".geolink__reg",
    cityInput: "#city__front-input",
    cityList: (city) => `//ul[@class="popup__items input__popup-items"]/li[1]/div[.='${city}']`,
    clickCity: '//ul[@class="popup__items input__popup-items"]/li[1]',
    service: ".services-new__more-icons",
    grabService:
      '//ul[@class="services-new__more-popup-services"]/li[@class="services-new__list-item"][not(contains(@style, "display: none;"))]//div[2]',
  },

  async openPage() {
    await I.amOnPage(this.elements.openPage);
  },

  async setLocation(city) {
    await I.click(this.elements.geoLink);
    await I.fillField(this.elements.cityInput, city);
    await I.waitForVisible(this.elements.cityList(city), 5);
    await I.click(this.elements.clickCity);
  },

  async getServices() {
    await I.waitForVisible(this.elements.service, 5);
    await I.click(this.elements.service);
    let serviceList = await I.grabTextFromAll(this.elements.grabService);
    return serviceList;
  },

  async diff(london, paris) {
    expect(london).toEqual(paris);
    // if (london.length === paris.length)
    //   london.filter((servis) => !paris.includes(servis)).length !== 0
    //     ? console.log("разные")
    //     : console.log("одинаковые");
    // else console.log("разные");
  },
};
