import api from "../helpers/api";
import data from "../helpers/data"
const folderName: string = "v";

Feature("Работа с папкой");

Scenario("Создать/удалить папку", async () => {
  await api.createFolder(folderName);
  const createdFolder = await api.getFolder({folderName: folderName, isImage: false});
  await data.isExists({response: createdFolder, isExists: true, folderName: folderName});
  await api.deleteFolder(folderName);
  const deletedFolder = await api.getFolder({folderName: folderName, isImage: false});
  await data.isExists({response: deletedFolder, isExists: false});
});
