Feature("Логин");

Scenario("Ввод неверного логина", async ({ main, login, wrlogin }) => {
  await main.openPage();
  await login.openMail();
  await wrlogin.inputLogin("NoAutotestUser");
  await wrlogin.message();
});
