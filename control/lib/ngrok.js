var ngrok=require("ngrok");
var staticData=require("../../model").staticData;

exports.createNgrok=function(httpPort){
    ngrok.connect({
            authtoken: 'yDxpzny8uAvrY1vvdnAT',
            subdomain: 'mac_song',
            //httpauth: 'song:song',
            port:httpPort 
    }, function (err, url) {
            // https://susanna.ngrok.com -> 127.0.0.1:8080 with http auth required
            console.log(err,url);
    });

    ngrok.connect({
        // http is the default protocol (and you should use it for the https
        // support) but tcp will work for everything else.
        authtoken: 'yDxpzny8uAvrY1vvdnAT',
        proto: 'tcp',
        port:httpPort
    }, function (err, url) {
        // tcp://abcd.ngrok.com:60234 -> 127.0.0.1:5762
        console.log(err,url);
        if(url){
            var tcpPort=parseInt(url.substr(16));
            staticData.setNgrokTcpPort(tcpPort);
        }
    });
}
