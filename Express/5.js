let express = require("express");
let app = express();

let app2= app.route('QAC')

app2.get((res,rep)=>{
    res.send("QA, GET method called")
})
    .post((res,rep)=>{
    res.send("QA, POST method called")
})
    .put((res,rep)=>{
    res.send("QA, PUT method called")
})

app.route('/pash')
    .get((req,res)=>{
        res.send("pash, Get method called")
    })
    .post((req,res)=>{
        res.send("Pash, Post method called")
    })
    .put((req,res)=>{
        res.send('Pash, PUT method called')
    })


app.listen(8000)