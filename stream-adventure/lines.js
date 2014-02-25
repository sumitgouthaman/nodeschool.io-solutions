var through = require('through');
var split = require('split');
var n = 0;
process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        if (n % 2 == 0) {
            line = line.toString().toLowerCase();
        } else {
            line = line.toString().toUpperCase();
        }
        n++;
        this.queue(line + "\n");
    }))
    .pipe(process.stdout);