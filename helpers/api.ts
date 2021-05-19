import fetch from "node-fetch";
const expect = require("expect");

// interface ICreateFolder {
//   href: string;
//   method: string;
//   templated: boolean;
// }

// interface IError {
//   message: string;
//   description: string;
//   error: string;
// }

class API {
  private customHeaders: any = {
    Authorization: "OAuth AQAAAAAcXMInAAcf7RtGGcq-m0wJn_H1SFrpFDY",
    Accept: "*/*",
  };
  private URL: string = "https://cloud-api.yandex.net/v1/disk/";

  async createFolder(folderName: string): Promise<any> {
    const response = await fetch(`${this.URL}resources?path=${folderName}`, {
      headers: this.customHeaders,
      method: "PUT",
    });
    return await response.json();
  }

  async isCreate(response: any, folderName: string): Promise<void> {
    expect(response.path).toEqual(`disk:/${folderName}`);
  }

  async isDelete(response: any, folderName: string): Promise<void> {
    expect(response.message).toEqual("Не удалось найти запрошенный ресурс.");
  }

  async deleteFolder(folderName: string): Promise<void> {
    const response = await fetch(`${this.URL}resources?path=${folderName}`, {
      headers: this.customHeaders,
      method: "DELETE",
    });
  }

  async getFolder(folderName: string): Promise<void> {
    const response = await fetch(`${this.URL}resources?path=${folderName}`, {
      headers: this.customHeaders,
      method: "GET",
    });
    return await response.json();
  }
}

export default new API();
