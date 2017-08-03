var fs = require('fs')
var path = require('path')
var phantomjs = require('phantomjs-prebuilt')

var binPath = phantomjs.path
if (fs.existsSync(binPath) && path.isAbsolute(binPath) && binPath.indexOf('snapshot') < 0) {
   console.log('phantomjs is installed at ' + binPath)
}
else {
    console.error('can\'t find phantomjs at ' + binPath)
}

//using path.dirname(process.execPat) instead of __dirname for zeit/pkg
var program = phantomjs.exec(path.join(path.dirname(process.execPath), './screenshot.js'), path.dirname(process.execPath), "https://github.com/BernsteinA", "bigshot")
program.stdout.pipe(process.stdout)
program.stderr.pipe(process.stderr)
program.on('exit', code => {
  // do something on end
})
