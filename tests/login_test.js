Feature("");

Scenario.only("Проверка юзера", async ({ main, login }) => {
  await main.openPage();
  await login.openMail();
  await login.auth("AutotestLogin", "autotestPassword123");
  let loginus = await login.isUser();
  await login.diff("AutotestLogin", loginus);
});
