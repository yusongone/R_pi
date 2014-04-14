var model=require("../../model");
function init_post_router(app){
    app.post("/",function(req,res){
        res.render("indexh",{"title":"fdfd"}); 
    }); 

    app.post("/getNgrokPort",function(req,res){
        var port=model.staticData.getNgrokTcpPort();
        res.send({"status":"ok","data":port});
    }); 
};

exports.init=init_post_router;
