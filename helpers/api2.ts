import fetch from 'node-fetch';

class API2 {
  private customHeaders: any = {
    Authorization: 'OAuth AQAAAAAcXMInAAcf7RtGGcq-m0wJn_H1SFrpFDY',
    Accept: '*/*',
  };
  private URL: string = 'https://cloud-api.yandex.net/v1/disk/';

  async postFile(
    folderName: string,
    imageName: string,
    img: string
  ): Promise<any> {
    const response = await fetch(
      `${this.URL}resources/upload?path=${folderName}/${imageName}&url=${img}`,
      {
        headers: this.customHeaders,
        method: 'POST',
      }
    );
    return (await response.json()).href.slice(48);
  }

  async asyncOperation(id: string): Promise<void> {
    let response = await fetch(`${this.URL}operations/${id}`, {
      headers: this.customHeaders,
      method: 'GET',
    });
    while ((await response.json()).status !== 'success') {
      response = await fetch(`${this.URL}operations/${id}`, {
        headers: this.customHeaders,
        method: 'GET',
      });
    }
  }

  async deleteFile(folderName: string, imageName: string): Promise<void> {
    await fetch(`${this.URL}resources?path=${folderName}/${imageName}`, {
      headers: this.customHeaders,
      method: 'DELETE',
    });
  }
}

export default new API2();
