//requirejs(["jquery"],function($,Common){
requirejs(["jquery","/js/common.js"],function($,Common){
    $(document).ready(function(){
        var url=$("#page_data_websocketUrl").attr("value"); 
        //var socket = io.connect('tcp://ngrok.com:51663');
        var socket = io.connect(url);
            socket.on('news', function (data) {
                console.log("now use");
                socket.emit('my other event', { my: 'data' });
            });
		$("#btn1").click(function(){
			operate(0,1);
		});
		$("#btn2").click(function(){
			operate(0,0);
		});
		$("#btn3").click(function(){
			operate(1,1);
		});
		$("#btn4").click(function(){
			operate(1,0);
		});
    });
});

function operate(pin,opr){
	$.ajax({
		url:"/operate",
		type:"post",
		data:{id:pin,opr:opr},
		success:function(data){
		}
	})
}
