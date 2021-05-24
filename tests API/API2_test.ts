import api from '../helpers/api';
import data from '../helpers/data';
import api2 from '../helpers/api2';
const folderName: string = 'kats2';
const imageName: string = 'img.jpg';
const img: string =
  'https://memepedia.ru/wp-content/uploads/2018/11/screenshot_11.png';

Feature('Работа с файлом в папке');

Scenario('Создать/удалить папку и файл ', async () => {
  await api.createFolder(folderName);
  const createdFolder = await api.getFolder({
    folderName: folderName,
    isImage: false,
  });
  await data.isExists({
    response: createdFolder,
    isExists: true,
    folderName: folderName,
  });
  const downloadFile = await api2.postFile(folderName, imageName, img);
  await api2.asyncOperation(downloadFile);
  await api2.deleteFile(folderName, imageName);
  const deletedFile = await api.getFolder({
    folderName: folderName,
    isImage: true,
    imgName: imageName,
  });
  await data.isDeleted(deletedFile, folderName, imageName);
  await api.deleteFolder(folderName);
  const deletedFolder = await api.getFolder({
    folderName: folderName,
    isImage: false,
  });
  await data.isExists({ response: deletedFolder, isExists: false });
});
