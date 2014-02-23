var mymodule = require('./mymodule');
mymodule(process.argv[2], process.argv[3], function (err, list) {
    if (err) {
        console.error(err);
        return;
    }
    for (var l = 0; l < list.length; l++) {
        console.log(list[l]);
    }
});