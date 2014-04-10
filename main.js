var ngrok = require('ngrok');

var express=require('express');
var app=express();
var http=require("http");
var ejs=require("ejs");

var socketIO= require('socket.io');


app.use(express.static(__dirname + '/public'));

//config ejs
app.set("view engine","ejs");
app.set("views",__dirname+"/views");

app.engine('html', require('ejs').renderFile);
app.get("/",function(req,res){
    res.render("indexh",{"title":"fsdf"});
});
var server=app.listen(3000,function(){
    console.log("http server ok");
    createNgrok();
});

var io=socketIO.listen(server);

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
    console.log(data);
    });
});

function createNgrok(){
    ngrok.connect({
            authtoken: 'yDxpzny8uAvrY1vvdnAT',
            subdomain: 'songsong',
            httpauth: 'song:song',
            port: 3000
    }, function (err, url) {
            // https://susanna.ngrok.com -> 127.0.0.1:8080 with http auth required
            console.log(url);
    });
}
