var model=require("../../model");

function init_get_router(app){
    app.get("/",function(req,res){
        var url=model.staticData.getNgrokUrl();
        var port=model.staticData.getNgrokTcpPort();
        res.render("indexh",{"title":"fdfd","websocketURL":url+":"+port}); 
    }); 
};

exports.init=init_get_router;
