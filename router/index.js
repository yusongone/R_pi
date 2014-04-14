var getRequest=require("./lib/get_request");
var postRequest=require("./lib/post_request");

exports.init=function(app){
    getRequest.init(app);
    postRequest.init(app);
}
