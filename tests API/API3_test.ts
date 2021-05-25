import api from '../helpers/api';
import data from '../helpers/data';
import api2 from '../helpers/api2';
import api3 from '../helpers/api3';

const folderName: string = 'parrot';
const imageName: string = 'popug.jpg';
const img: string = 'https://mem-baza.ru/_ph/1/2/407807962.jpg?1600930888';

Feature('Работа с файлом в корзине');

Scenario(
  'Создать файл/удалить файл/восстановить файл',
  async () => {
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
    await api2.checkStatus(downloadFile);
    await api2.deleteFile(folderName, imageName);
    const deletedFile = await api.getFolder({
      folderName: folderName,
      isImage: true,
      imgName: imageName,
    });
    await data.isDeleted(deletedFile);
    const fileInTrash = await api3.getFromTrash();
    const pathNameToRestore = await data.splitName(fileInTrash, imageName);
    await api3.restoreFile(pathNameToRestore);
    const assyncId = await api3.deleteFolder(folderName, true);
    await api2.checkStatus(assyncId);
    const deletedFolder = await api.getFolder({
      folderName: folderName,
      isImage: false,
    });
    await data.isExists({ response: deletedFolder, isExists: false });
  }
);
