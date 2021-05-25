import fetch from 'node-fetch';

class API3 {
  private customHeaders: any = {
    Authorization: 'OAuth AQAAAAAcXMInAAcf7RtGGcq-m0wJn_H1SFrpFDY',
    Accept: '*/*',
  };
  private URL: string = 'https://cloud-api.yandex.net/v1/disk/';

  async getFromTrash(): Promise<any> {
    const response = await fetch(`${this.URL}trash/resources?path=%2F`, {
      headers: this.customHeaders,
      method: "GET",
    });
    return (await response.json())._embedded.items
  }
  
  async restoreFile(fileName: string): Promise<void> {
    await fetch(`${this.URL}trash/resources/restore?path=${fileName}`, {
      headers: this.customHeaders,
      method: "PUT",
    });
  }

  async deleteFolder(folderName: string, permanently: boolean): Promise<string> {
      let response =  await fetch(`${this.URL}resources?path=${folderName}&permanently=${permanently}`, {
          headers: this.customHeaders,
          method: "DELETE",
      });
      return (await response.json()).href.slice(48)
  }

}

export default new API3();
