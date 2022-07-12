var fs = require('fs');
var minify = require('minify');
var pkg = require('./package.json');

function inputFileDir(fileName) {
  return './src/' + fileName
}

function outputFileDir(fileName) {
  return './dist/' + fileName
}

var comment = "/*! " + pkg.name + " v" + pkg.version + " | " + pkg.homepage + " | MIT license */\n";

function copyFile(inputName, outputName) {
  try {
    var input = comment + fs.readFileSync(inputFileDir(inputName))
    fs.writeFileSync(outputFileDir(outputName||inputName), input);
  } catch (error) {
    console.error(error);
  }
}

copyFile('index.js')
copyFile('index.d.ts')

minify(inputFileDir('index.js'))
.then(function(data) {
  var js = comment + data;
  fs.writeFileSync(outputFileDir('index.min.js'), js);
  console.log("Done!");
})
.catch(function(error) {
  console.error(error);
});