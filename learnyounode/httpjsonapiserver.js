var http = require('http');
var url = require('url');
var port = process.argv[2];
var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true);
    if (parsedUrl.pathname === '/api/parsetime') {
        var iso = parsedUrl.query.iso;
        var date = new Date(iso);
        var obj = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });
        response.write(JSON.stringify(obj));
        response.end();
    } else if (parsedUrl.pathname === '/api/unixtime') {
        var iso = parsedUrl.query.iso;
        var date = new Date(iso);
        var obj = {
            "unixtime": date.getTime()
        }
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });
        response.write(JSON.stringify(obj));
        response.end();
    }
});
server.listen(port);