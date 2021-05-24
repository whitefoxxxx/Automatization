import fetch from "node-fetch";

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

  async createFolder(folderName: string): Promise<void> {
    await fetch(`${this.URL}resources?path=${folderName}`, {
      headers: this.customHeaders,
      method: "PUT",
    });
  }

  async deleteFolder(folderName: string, permanently?: boolean): Promise<void> {
      await fetch(`${this.URL}resources?path=${folderName}`, {
        headers: this.customHeaders,
        method: "DELETE",
      });

  }

  async getFolder(params: {
    folderName: string;
    isImage: boolean;
    imgName?: string;
  }): Promise<any> {
    if (params.isImage) {
      const response = await fetch(
        `${this.URL}resources?path=${params.folderName}/${params.imgName}`,
        {
          headers: this.customHeaders,
          method: "GET",
        }
      );
      return await response.json();
    } else {
      const response = await fetch(
        `${this.URL}resources?path=${params.folderName}`,
        {
          headers: this.customHeaders,
          method: "GET",
        }
      );
      return await response.json();
    }
  }
}

export default new API();
