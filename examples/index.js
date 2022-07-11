const QRCodeSVG = require("../dist/qrcode-svg-ts.min.js");
const qrcode = new QRCodeSVG('123')
// console.log(
//     qrcode.toDataURL()
// );

qrcode.save('./qrcode.svg').then(() => {
    console.log('保存成功')
}).catch(console.err)