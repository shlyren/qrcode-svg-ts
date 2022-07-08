const QRCodeSVG = require("./dist/qrcode-svg-ts");
console.log(
    new QRCodeSVG('123')
    .toDataURL()
);