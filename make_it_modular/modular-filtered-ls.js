var fs = require('fs');
var path = require('path');

var listFiles = function(dir, ext, cb) {
    fs.readdir(dir, function(err, data){
        if (err) {
            return cb(err);
        } else {
            return cb(null, data.filter(function(file) {
                if (path.extname(file).replace('.', '') == ext) {
                    return file;
                }
            }));
        }
    });
}

module.exports = listFiles;
