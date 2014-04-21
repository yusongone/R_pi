var ngrok = require('ngrok');

var http=require("http");
var express=require('express'),
	bodyParser=require('body-parser'),
    app=express(),
    ejs=require("ejs");
var router=require("./router");
var control=require("./control");
var socketIO= require('socket.io');

var listenPort=3000;
var staticData=require("./model").staticData;


app.use(bodyParser());

//config ejs
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.engine('html', require('ejs').renderFile);

app.get("/test",function(req,res){
    console.log(req.get("User-Agent"));
    var ua=req.headers['user-agent'];
    console.log("ff",ua);
});

control.initNgrok(listenPort);
router.init(app);



var server=app.listen(listenPort,function(){
    console.log("http server ok");
    //createNgrok();
});


var io=socketIO.listen(server);

io.sockets.on('connection', function (socket) {
    console.log("fddf");
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
    });
});

