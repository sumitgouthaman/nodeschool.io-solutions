var concat = require('concat-stream');
process.stdin
    .pipe(concat(function (str) {
        str = str.toString();
        str = str.split("").reverse().join("");
        console.log(str.toString());
        //        var rev = str.reverse();
        //        rev.pipe(process.stdout);
    }));