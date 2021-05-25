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
  ): Promise<string> {
    const response = await fetch(
      `${this.URL}resources/upload?path=${folderName}/${imageName}&url=${img}`,
      {
        headers: this.customHeaders,
        method: 'POST',
      }
    );
    return (await response.json()).href.slice(48);
  }

  private async getResponse(id: string): Promise<string> {
    const response = await fetch(`${this.URL}operations/${id}`, {
      headers: this.customHeaders,
      method: 'GET',
    });
    return (await response.json()).status 
  }

  async checkStatus(id: string): Promise<void> {
   let status = await this.getResponse(id)
    while(status !== 'success') {
      status = await this.getResponse(id)
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
