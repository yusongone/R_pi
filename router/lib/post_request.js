var model=require("../../model");
var control=require("../../control");
function init_post_router(app){
    app.post("/",function(req,res){
        res.render("indexh",{"title":"fdfd"}); 
    }); 

    app.post("/getNgrokPort",function(req,res){
        var port=model.staticData.getNgrokTcpPort();
        res.send({"status":"ok","data":port});
    }); 
    app.post("/getNgrokSSHPort",function(req,res){
        var port=model.staticData.getNgrokSSHPort();
        res.send({"status":"ok","data":port});
    }); 

	app.post("/operate",function(req,res){
		var reqBody=req.body;	
			//control.hardware.serToArd.send("Button:[1,1,1,]");
			var str="Button:[1,"+reqBody.id+","+reqBody.opr+",]"
			control.hardware.serToArd.send(str);
			console.log(str);
			res.send({"status":"ok"});
	});
};

exports.init=init_post_router;
