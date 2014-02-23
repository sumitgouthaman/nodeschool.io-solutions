var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
fs.readdir(process.argv[2], function (err, list) {
    for (var l = 0; l < list.length; l++) {
        if (path.extname(list[l]) == "." + ext) {
            console.log(list[l]);
        }
    }
});