
let express=require("express");
let app=express()

let londonrequest= function(req, res){
    console.log("Welcome to london");
}

app.get("/QA", function(req, res){
    console.log("QA request recieved");
})

app.get("/london", londonrequest)


app.listen(8000)