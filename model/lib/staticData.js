var ngrokTcpPort;
var ngrokUrl="ngrok.com"

exports.setNgrokTcpPort=function(value){
    ngrokTcpPort=value;
}
exports.getNgrokTcpPort=function(){
   return ngrokTcpPort;
}
exports.getNgrokUrl=function(){
   return ngrokUrl;
}
