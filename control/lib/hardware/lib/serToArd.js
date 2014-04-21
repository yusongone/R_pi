var callback;
var serial=require("serialport").SerialPort;

var serialPort=new serial("/dev/ttyAMA0",{
	baudrate:115200,
	dataBits: 8, 
	parity: 'none', 
	stopBits: 1, 
	flowControl: false 
});


serialPort.on('data', function(data) {
	if(callback){
		callback();
	}
});

exports.init=function(callback){
	serialPort.open(function () {
		callback();
	});
}

exports.send=function(msg){
	console.log("sendData",msg);
	serialPort.write("{{"+msg+"}}");	
}

exports.bindAccept=function(callbck){
	
}

