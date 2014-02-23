var http = require('http');
var bl = require('bl');
var urlContent = new Array(3);
var countContent = 0;
for (var u = 2; u <= 4; u++) {
    (function (u2) {
        var url = process.argv[u2];
        http.get(url, function (response) {
            response.pipe(bl(function (err, data) {
                if (err) {
                    console.error(err);
                }
                var str = data.toString();
                urlContent[u2 - 2] = str;
                countContent += 1;
                if (countContent === 3) {
                    print();
                }
            }));
        });
    })(u);

}
var print = function () {
    for (var u = 2; u <= 4; u++) {
        console.log(urlContent[u - 2]);
    }
}