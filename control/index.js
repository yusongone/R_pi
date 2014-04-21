var ngrok=require("./lib/ngrok");
var hardware=require("./lib/hardware");

exports.initNgrok=function(httpPort){
    ngrok.createNgrok(httpPort);
}
exports.hardware=require("./lib/hardware");
