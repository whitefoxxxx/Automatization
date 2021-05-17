Feature("Логаут");

Scenario("Проверка выхода из аккаунта", async ({ main, login, logout }) => {
  await main.openPage();
  await login.openMail();
  await login.auth("AutotestLogin", "autotestPassword123");
  await logout.logout();
  await logout.isLogoutPage();
});
