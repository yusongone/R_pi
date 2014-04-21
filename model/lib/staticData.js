var ngrokTcpPort;
var ngrokUrl="ngrok.com"
var ngrokSSHPort;

exports.setNgrokTcpPort=function(value){
    ngrokTcpPort=value;
}
exports.getNgrokTcpPort=function(){
   return ngrokTcpPort;
}
exports.setNgrokSSHPort=function(value){
    ngrokSSHPort=value;
}
exports.getNgrokTcpPort=function(){
   return ngrokSSHPort;
}
exports.getNgrokUrl=function(){
   return ngrokUrl;
}
