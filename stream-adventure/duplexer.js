var spawn = require('child_process').spawn;
var duplexer = require('duplexer');
module.exports = function (cmd, args) {
    var childProcess = spawn(cmd, args);
    return duplexer(childProcess.stdin, childProcess.stdout);
};