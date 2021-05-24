import expect from "expect";

class Check {
  async isExists(params: {
    response: any;
    isExists: boolean;
    folderName?: string;
  }): Promise<void> {
    if (params.isExists)
      expect(params.response.path).toEqual(`disk:/${params.folderName}`);
    else
      expect(params.response.message).toEqual(
        "Не удалось найти запрошенный ресурс."
      );
  }

  async isDeleted(
    response: any,
    folderName: string,
    fileName: string
  ): Promise<void> {
    expect(response.message).toEqual("Не удалось найти запрошенный ресурс.");
  }

  async splitName(arrOfElem: any, pictureName: string): Promise<string> {
    return pictureName + '_' + arrOfElem.find((elem: any) => elem.name === pictureName).path.slice(-40)
  }
}

export default new Check();
