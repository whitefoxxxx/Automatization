Feature("Пароль");

Scenario("Ввод неверного пароля", async ({ main, login, wrpass }) => {
  await main.openPage();
  await login.openMail();
  await login.auth("AutotestLogin", "NoAutotestPassword");
  await wrpass.message();
});
