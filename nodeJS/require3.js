let ref=require("http")

let requestProcessor=function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url=="/"){
    res.write(" <h2> hello </h2>")
    res.write("my friends")
    res.write("</br>")
    res.write("<a href='http://localhost:8001/QA'>QA CONSULTING</a>")
    res.end()
    }
    if (req.url=='/QA'){
    res.write("<h2> Welcome to QA</h2>")
    res.write("<a href='http://localhost:8001/'>HOME</a>")
    res.end()
    }
}

let server=ref.createServer(requestProcessor)
server.listen(8001)