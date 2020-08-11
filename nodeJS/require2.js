let ref=require("http")

let requestProcesspr=function(req, res){
    console.log(req.url);
}

let server=ref.createServer(requestProcesspr)
server.listen(8001)