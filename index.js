const axios = require("axios");
const QRReader = require("qrcode-reader");
const jimp = require("jimp");

async function main() {
    const imageID = "1e9TFzKj25YS12nlr1ItHGpPRHTvSvpjQ" //GoogleDriveの共有リンクからIDを取得し、入力する
  await jimp.read(
    `https://drive.google.com/uc?export=view&id=${imageID}`, 

    async function (err, image) {
      const qr = new QRReader();
      const value = await new Promise((resolve, reject) => {
        qr.callback = (err, v) => (err != null ? reject(err) : resolve(v));
        qr.decode(image.bitmap);
      });
      message = { type: "text", text: `解析結果：${value.result}` };
      console.log(message)
    }
  );
}
main();
