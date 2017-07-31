var path = require('path')
var phantomjs = require('phantomjs-prebuilt')
//using path.dirname(process.execPat) instead of __dirname for zeit/pkg
var program = phantomjs.exec(path.join(path.dirname(process.execPath), './screenshot.js'), path.dirname(process.execPath), "https://github.com/BernsteinA", "bigshot")
program.stdout.pipe(process.stdout)
program.stderr.pipe(process.stderr)
program.on('exit', code => {
  // do something on end
})
