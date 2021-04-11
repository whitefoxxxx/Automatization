const I = actor();

const services = new DataTable(["link", "locator"]);
services.add(["/video", '//ul[@class="services-new__list"]/li[1]/a']);
services.add(["/images", '//ul[@class="services-new__list"]/li[2]/a']);
services.add(["/news", '//ul[@class="services-new__list"]/li[3]/a']);
services.add(["/maps", '//ul[@class="services-new__list"]/li[4]/a']);
services.add(["/market", '//ul[@class="services-new__list"]/li[5]/a']);
services.add(["/translate", '//ul[@class="services-new__list"]/li[6]/a']);
services.add(["/music", '//ul[@class="services-new__list"]/li[8]/a']);

module.exports = {
  elements: {
    openPage: "https://yandex.by",
  },

  async changeServis(link, locator) {
    await I.waitForVisible(locator);
    await I.click(locator);
    await I.wait(5);
  },
  services,
};
