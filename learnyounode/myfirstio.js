var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var lines = str.split('\n');
var ans = lines.length - 1;
console.log(ans);