var fs = require('fs-extra');
var ghpages = require('gh-pages');
var path = require('path');

function toAbsolute(p) {
    return path.join(__dirname, p);
}

function copy(src, dist) {
    fs.copySync(toAbsolute(src), toAbsolute(dist));
}

copy('../bower_components', '../dist');
copy('../demo', '../dist/taucharts-polymer/demo');
copy('../index.html', '../dist/taucharts-polymer/index.html');
copy('../taucharts-polymer.html', '../dist/taucharts-polymer/taucharts-polymer.html');
copy('./index.html', '../dist/index.html');

ghpages.publish(toAbsolute('../dist'), function (err) {
    fs.removeSync(toAbsolute('../dist'));
    if (err) {
        console.log(err);
        return;
    }
    console.log('published!');
});
