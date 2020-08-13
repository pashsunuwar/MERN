let express = require(express);
let app = express();



let F1= function(req, res){
    console.log("I am a function");
}

app.get("/qa", function(req, res){
    res.write("hello my friend")
    res.end()
})

app.get("/qac",(req,res)=>{
    res.write("hello my friends2")
    res.end()
})

app.listen(1000)