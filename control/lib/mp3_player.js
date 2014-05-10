var fs=require('fs');
var lame = require('lame');
var Speaker = require('speaker');
var musicPlayer;
var mp3ListAry=[];
 
//var stream=fs.createReadStream(process.argv[2]);
var i=0;
function readMp3List(){
	var dirList = fs.readdirSync("/music");
	dirList.forEach(function(item){
	mp3ListAry.push(item);	
	console.log(i+":::"+item);
	i++;
	});
};

function play(filename){
	var stream=fs.createReadStream("/music/"+filename);
	var decoder=new lame.Decoder();
	var Pipe=stream.pipe(decoder);
	Pipe.on('format', function (format) {
		musicPlayer=new Speaker(format);
		this.pipe(musicPlayer);
		console.log(Pipe);
	});

	Pipe.on("data",function(data){
	//	console.log(data);
	});
};

exports.play=function(index){
	musicPlayer?musicPlayer.end():"";
	musicPlayer=null;
	play(mp3ListAry[index]);
}

exports.readMp3List=readMp3List;
