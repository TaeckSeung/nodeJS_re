var http = require('http');
var port = 3000;
http.createServer(function(req,res){
    //http Response 헤더, 컨텐츠 설정
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<h1>hello world</h1>');
    res.end;
}).listen(port);