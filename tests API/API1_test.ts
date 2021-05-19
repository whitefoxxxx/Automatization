import api from "../helpers/api";

Feature("Работа с папкой");

Scenario("Создать/удалить папку", async () => {
  await api.createFolder("v");
  const create = await api.getFolder("v");
  await api.isCreate(create, "v");
  await api.deleteFolder("v");
  const deleted = await api.getFolder("v");
  await api.isDelete(deleted, "v");
});
