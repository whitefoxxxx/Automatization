import api from '../helpers/api';
import data from '../helpers/data';
import api2 from '../helpers/api2';
import api3 from '../helpers/api3';

const folderName: string = 'parrots';
const imageName: string = 'popug.jpg';
const img: string = 'https://mem-baza.ru/_ph/1/2/407807962.jpg?1600930888';
const imageName2: string = 'popug2.jpg';
const img2: string = 'https://cbsmedia.ru/wp-content/uploads/2017/02/i-1.jpg';

Feature('Анализ информации');

Scenario.only('Сравнение размеров файлов до и после удаления', async () => {
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
  const downloadFile2 = await api2.postFile(folderName, imageName2, img2);
  await api2.checkStatus(downloadFile2);
  const img_1 = await api.getFolder({
    folderName: folderName,
    isImage: true,
    imgName: imageName,
  });
  const img_2 = await api.getFolder({
    folderName: folderName,
    isImage: true,
    imgName: imageName2,
  });
  const sizeInFolder = await data.countSize(img_1, img_2);
  await api2.deleteFile(folderName, imageName);
  const deletedFile = await api.getFolder({
    folderName: folderName,
    isImage: true,
    imgName: imageName,
  });
  await data.isDeleted(deletedFile);
  await api2.deleteFile(folderName, imageName2);
  const deletedFile2 = await api.getFolder({
    folderName: folderName,
    isImage: true,
    imgName: imageName2,
  });
  await data.isDeleted(deletedFile2);
  const fileInTrash = await api3.getFromTrash();
  const sizeInTrash = await data.sizeInTrash(
    fileInTrash,
    imageName,
    imageName2
  );
  await data.isEqualSize(sizeInFolder, sizeInTrash);
  const pathNameToRestore = await data.splitName(fileInTrash, imageName);
  await api3.restoreFile(pathNameToRestore);
  const assyncId = await api3.deleteFolder(folderName, true);
  await api2.checkStatus(assyncId);
  const deletedFolder = await api.getFolder({
    folderName: folderName,
    isImage: false,
  });
  await data.isExists({ response: deletedFolder, isExists: false });
});
