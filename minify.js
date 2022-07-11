var fs = require('fs');
var minify = require('minify');
var pkg = require('./package.json');

var input = './src/index.js';
var output = './dist/qrcode-svg-ts.js';
var output_min = './dist/qrcode-svg-ts.min.js';

var comment = "/*! " + pkg.name + " v" + pkg.version + " | " + pkg.homepage + " | MIT license */\n";

fs.writeFileSync(output, comment + fs.readFileSync(input));

minify(input)
.then(function(data) {
  var js = comment + data;
  fs.writeFileSync(output_min, js);
  console.log("Done!");
})
.catch(function(error) {
  if (error) return console.error(error);
});