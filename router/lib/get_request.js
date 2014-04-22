var model=require("../../model");

function init_get_router(app){
    app.get("/",function(req,res){
        var url=model.staticData.getNgrokUrl();
        var port=model.staticData.getNgrokTcpPort();
        var sshPort=model.staticData.getNgrokSSHPort();
        res.render("indexh",{
			"title":"fdfd",
			"websocketURL":url+":"+port,
			"TCPPort":sshPort,
		}); 
    }); 
};

exports.init=init_get_router;
