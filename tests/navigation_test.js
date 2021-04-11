const { services } = require("../pages/navigation");

Feature("Навигация");

Data(services).Scenario("Переход по разным сервисам", async ({ main, navigation, current }) => {
  await main.openPage();
  await navigation.changeServis(current.link, current.locator);
});
