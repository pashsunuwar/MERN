let express = require("express")
let app = express()

app.get("/", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h2> Select a Times Table of </h2>")
    for(let i=1; i<=10; i++){
        // res.write("<a href: 'http://localhost:8000/range'>"+i+"</a>")
        res.write(`<a href='http://localhost:8000/range/${i}'> ${i} </a>`)
        res.write("<br>")
    }
    res.end()
})

app.get("/range/:t", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    let T=req.params.t
    // res.write(`<h2>You have selected the table</h2>`)
    res.write (`<h2> You have selected the Table ${T} </h2>`)
    res.write ("<em>Now select the range</em>")
    res.write ("<br>")
    for(let i=10; i<=100; i++){
        res.write(`<a href='http://localhost:8000/range/${T}/${i}'> ${i} </a>`)
        res.write("<br>")
    }
    res.end()
})

app.get("/range/:t/:i", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    let T=parseInt(req.params.t)
    let I=parseInt(req.params.i)
    res.write("<table border='2'>");
    for (let a=1; a <= I; a++){
    res.write("<tr>");
    res.write("<td>");
    res.write (T + " x " + a + "="+(T*a))
    res.write("</td>");
    res.write("</tr>");
    }
    res.write("</table>");
   
    
    
    res.end();
    

})



app.listen(8000)