var http = require('http');
var through = require('through');
var server = http.createServer(function(req,res){
    if(req.method==='POST'){
        req.pipe(through(function(chunk){
            this.queue(chunk.toString().toUpperCase());
        })).pipe(res);
    }else{
        res.end("Only POST will be accepted!\n");
    }
});
server.listen(process.argv[2]);