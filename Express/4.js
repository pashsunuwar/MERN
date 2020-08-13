let express=require("express")
let app = express()

app.get("/first", (req,res)=>{
  
    
})

app.get("/second/:num", function(req, res, next){
    let n=req.params.num
    console.log("a2");
    if (n==2){
    next();
    }
}, (req,res,next)=>{
    console.log("a3");
},(req,res)=>{
    console.log("a4");
})



app.listen(2000)