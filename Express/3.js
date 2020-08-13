let express=require("express")
let app=express()

// http://localhost:8000/message/pash

app.get('/message/:name',function(req,res){
    res.write("hello " + req.params.name)
    res.end();
})

app.get('/msg/:n/:a',function(req,res){
    res.write("hello " + req.params.n + " lives in " + req.params.a)
    res.end();
})


app.listen(8000)