var http = require('http');
var express = require('express');
var app = express();

// view engine setup
// 현재 디렉토리의 절대경로의 /views경로를 view경로로 이용
app.set('views', __dirname+'/views');
// 뷰 엔진 ejs로 설정
app.set('view engine', 'ejs');

// static file setting
app.use(express.static('public'));

//route setup
//인덱스를 설정
var index = require('./routes/index');
app.use('/', index);

//port setup
var port = process.env.PORT || 3000;

var server = http.createServer(app);
server.listen(port);

//웹 포트 리슨
var io = require('socket.io').listen(server);
//Event waiting(connection 시 콜백을 통해 function 실행)
io.sockets.on('connection',function(socket){
    //클라이언트에게 toclient 키로 msg를 전달
    socket.emit('toclient',{msg:'Welcome !'});
    //fromclient로 수신시 동작
    socket.on('fromclient',function(data){
        socket.broadcast.emit('toclient',data); // 자신을 제외하고 다른 클라이언트에게 보냄
        socket.emit('toclient',data); // 해당 클라이언트에게만 보냄. 다른 클라이언트에 보낼려면?
        console.log('Message from client :'+data.msg);
    });
});