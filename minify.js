var fs = require('fs');
var minify = require('minify');
var pkg = require('./package.json');

var src = './src/index.js';
var dst = './dist/qrcode-svg-ts.min.js';

minify(src)
.then(function(data) {
  var comment = "/*! " + pkg.name + " v" + pkg.version + " | " + pkg.homepage + " | MIT license */\n";
  var js = comment + data;
  fs.writeFileSync(dst, js);
  console.log("Done!");
})
.catch(function(error) {
  if (error) return console.error(error);
});