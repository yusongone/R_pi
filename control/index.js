var ngrok=require("./lib/ngrok");
var hardware=require("./lib/hardware");
var mp3Player=require("./lib/mp3_player");

exports.initNgrok=function(httpPort){
    ngrok.createNgrok(httpPort);
}
exports.hardware=require("./lib/hardware");
exports.mp3Player=mp3Player;
