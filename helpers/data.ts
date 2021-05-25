import expect from 'expect';

class Check {
  async isExists(params: {
    response: any;
    isExists: boolean;
    folderName?: string;
    folderName2?: string;
  }): Promise<void> {
    if (params.isExists) {
      if(params.folderName2) expect(params.response.path).toEqual(`disk:/${params.folderName}/${params.folderName2}`);
      else expect(params.response.path).toEqual(`disk:/${params.folderName}`);
    }
    else expect(params.response.message).toEqual('Не удалось найти запрошенный ресурс.');
  }

  async isDeleted(response: any): Promise<void> {
    expect(response.message).toEqual('Не удалось найти запрошенный ресурс.');
  }

  async splitName(arrOfElem: any, pictureName: string): Promise<string> {
    return (
      pictureName +
      '_' +
      arrOfElem.find((elem: any) => elem.name === pictureName).path.slice(-40)
    );
  }

  async countSize(resp_1: any, resp_2: any): Promise<number> {
    return resp_1.size + resp_2.size;
  }

  async sizeInTrash(fileInTrash: any, imageName: string, imageName2: string): Promise<number> {
   return fileInTrash.filter((elem: any) => elem.name === imageName || elem.name === imageName2).reduce((acc: number, cur: any) => acc + +cur.size, 0)
  }

  async isEqualSize(sizeInFolder: number, sizeInTrash:number) {
    expect(sizeInFolder).toEqual(sizeInTrash);
  }
}

export default new Check();
