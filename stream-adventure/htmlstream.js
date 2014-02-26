var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

process.stdin
    .pipe(tr)
    .pipe(process.stdout);

var stream = tr.select(".loud").createStream();
stream.pipe(through(function(chunk){
    this.queue(chunk.toString().toUpperCase());
})).pipe(stream);