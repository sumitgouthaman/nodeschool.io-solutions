var through = require('through');
var write = function (buf) {
    var upper = buf.toString().toUpperCase();
    //console.log("##" + upper);
    this.queue(upper);
}
var end = function () {

}
var tr = through(write, end);
process.stdin.pipe(tr).pipe(process.stdout);