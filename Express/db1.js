let express = require('express');
let app = express()
let mysql= require("mysql") 

function showallrecords(){
    // console.log("database application");
    let con= mysql.createConnection({
        // service: 'Mysql@localhost:3306',
        host:'localhost',
        user: 'root',
        password: 'root',
        database: 'qaconsulting'
    });
    con.connect();
    con.query("select * from student", function(err, result){
        if(err){
            console.log("something went wrong");
        }else{
            result.forEach(function(data){
                console.log(data.regno);
                console.log(data.name);
                console.log(data.address);
            })
        }
    })

}

app.get("/showallrecords", function(req,res){
    showallrecords()
})

app.listen(8000);