requirejs(["jquery","/js/common.js"],function($,Common){
    $(document).ready(function(){
        var url=$("#page_data_websocketUrl").attr("value"); 
        //var socket = io.connect('tcp://ngrok.com:51663');
        var socket = io.connect(url);
            socket.on('news', function (data) {
                console.log("now use");
                socket.emit('my other event', { my: 'data' });
            });
    });
});
