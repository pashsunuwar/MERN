let http=require ("http")

let server=http.createServer(function(req,res){
    console.log("request recieved");
})
server.listen(8001);