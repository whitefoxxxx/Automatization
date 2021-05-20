import fetch from "node-fetch";
const expect = require("expect");

class API2 {
  private customHeaders: any = {
    Authorization: "OAuth AQAAAAAcXMInAAcf7RtGGcq-m0wJn_H1SFrpFDY",
    Accept: "*/*",
  };
  private URL: string = "https://cloud-api.yandex.net/v1/disk/";
}

export default new API2();
