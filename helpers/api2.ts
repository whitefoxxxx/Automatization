import fetch from "node-fetch";

class API2 {
  private customHeaders: any = {
    Authorization: "OAuth AQAAAAAcXMInAAcf7RtGGcq-m0wJn_H1SFrpFDY",
    Accept: "*/*",
  };
  private URL: string = "https://cloud-api.yandex.net/v1/disk/";
  private img: string = "https://www.skiff-pharm.ru/images/publications/img-public2-31-01-2018.jpg";
  
  async postFile(folderName: string, imageName: string): Promise<any> {
    const response = await fetch(`${this.URL}resources/upload?path=${folderName}/${imageName}&url=${this.img}`, {
      headers: this.customHeaders,
      method: "POST",
    });
    return (await response.json()).href.slice(48)
  }  

  async asyncOperation(id: string): Promise<void> {
    let response = await fetch(`${this.URL}operations/${id}`, {
      headers: this.customHeaders,
      method: "GET",
    });
    while((await response.json()).status !== 'success') {
      response = await fetch(`${this.URL}operations/${id}`, {
        headers: this.customHeaders,
        method: "GET",
      });
    }
  }

  async deleteFile(folderName: string, imageName: string): Promise<void> {
    await fetch(`${this.URL}resources?path=${folderName}/${imageName}`, {
      headers: this.customHeaders,
      method: "DELETE",
    });
  }
}

export default new API2();

