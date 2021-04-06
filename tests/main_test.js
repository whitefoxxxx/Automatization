Feature("Главная страница");
const city = {
  London: "Лондон",
  Paris: "Полоцк",
};

Scenario("Сравнение сервисов", async ({ main }) => {
  await main.openPage();
  await main.setLocation(city.London);
  let london = await main.getServices();
  await main.setLocation(city.Paris);
  let paris = await main.getServices();
  await main.diff(london, paris);
});
