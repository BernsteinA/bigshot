///////////////

var scale = 1;

var domain = "https://github.com/BernsteinA/";

var path = "bigshot";


///////////////

var system = require('system');
var args = system.args;
var output = args[1];

var renderLargePage = require('phantomjs-render-large-page').renderLargePage;

var baseWidth = 1400;

var page = require('webpage').create();
page.devicePixelRatio = scale;
page.zoomFactor = scale;
page.viewportSize = { width: baseWidth*scale, height: 1 };

function repeat() {
  console.log( 'begin ' + scale.toString() + 'x');

    page.devicePixelRatio = scale;
    page.zoomFactor = scale;
    page.viewportSize = { width: baseWidth*scale, height: 1 };

    // console.log(page.evaluate(function(){
    //     return Math.max( document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth );
    // }));

    var filename = output + '/' + path.replace('/','_') + '@' + scale.toString() + 'x.png';
    console.log(filename);
    renderLargePage(page, filename, function(error){
        if(error) {
          console.error(error);
          phantom.exit()
        }
        else {
          console.log( scale.toString() + 'x ok');
          scale++;
          repeat();
        }
    });
}


page.open(domain+path+'/', function() {
    setTimeout( function() {
      repeat();
    }, 5000);
});
