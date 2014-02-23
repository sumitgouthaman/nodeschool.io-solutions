var net = require('net');
var strftime = require('strftime');
var socket = net.createServer(function (socket) {
    var date = new Date();
    var str = strftime('%F %H:%M', date);
    socket.write(str + "\n");
    socket.end();
});
socket.listen(process.argv[2]);