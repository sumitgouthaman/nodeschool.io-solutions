var fs = require('fs');
var path = require('path');
module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }
        var filteredList = new Array();
        for (var l = 0; l < list.length; l++) {
            if (path.extname(list[l]) === "." + ext) {
                filteredList.push(list[l]);
            }
        }
        callback(null, filteredList);
    });
}