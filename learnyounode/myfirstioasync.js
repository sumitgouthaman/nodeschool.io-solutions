var fs = require('fs');
fs.readdir(process.argv[2], function (err, buf) {
    var str = buf.toString();
    var lines = str.split('\n');
    var ans = lines.length - 1;
    console.log(ans);
});