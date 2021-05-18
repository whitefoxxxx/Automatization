import { elements } from "../pages/main";
module.exports = {
  customHeaders: {
    Autorization: "OAuth AQAAAAAcXMInAAcf7RtGGcq-m0wJn_H1SFrpFDY",
    Accept: "*/*"
  },
  URL: "https://cloud-api.yandex.net/v1/disk/",

},

async createFolder(foldterNAme: string) {

}

class API {
  async print(name: string): Promise<string> {
    return name + "a";
  }
}


export default new API();
