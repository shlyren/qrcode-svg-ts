const QRCodeSVG = require("../src/index.js");
const hello = new QRCodeSVG('hello')
// console.log(
//     qrcode.toDataURL()
// );

// qrcode.save('./qrcode.svg').then(() => {
//     console.log('保存成功')
// }).catch(console.err)
var modules = hello.modules;

var ascii = '';
var length = modules.length;
for (var y = 0; y < length; y++) {
  for (var x = 0; x < length; x++) {
    var module = modules[x][y];
    ascii += (module ? 'x' : ' ');
  }
  ascii += '\r\n';
}
console.log(ascii);