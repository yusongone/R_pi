var ngrok=require("./lib/ngrok");

exports.initNgrok=function(httpPort){
    ngrok.createNgrok(httpPort);
}
