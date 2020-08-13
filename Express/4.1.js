let express=require("express")
let app = express()

let F1= function(req, res, next){
    let n=req.params.num
    console.log("a2");
    if (n==2){
    next();
    }
}

let F2= (req,res,next)=>{
    console.log("a3");
    next();
    }

let F3= (req,res)=>{
    console.log("a4");
}
app.get("/second/:num", [F1,F2,F3])

app.listen(2000)