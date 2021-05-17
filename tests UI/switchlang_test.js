Feature("Локализация");

Scenario("Переключение языка на украинский", async ({ main, switchlang }) => {
  await main.openPage();
  // I.amOnPage("https://yandex.by/tune/lang?retpath=https%3A%2F%2Fyandex.by%2F&nosync=1");
  await switchlang.switchLang();
  await switchlang.isUkr();
  pause();
});
