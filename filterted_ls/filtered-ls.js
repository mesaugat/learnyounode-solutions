var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, files) {
    files.forEach(function(file) {
        if (path.extname(file).replace('.', '') == process.argv[3]) {
            console.log(file);
        };
    });
});