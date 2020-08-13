let express= require("express")
let app=express()
let reply=function(R){
    R.write('hello ')
    R.write('my ')
    R.write('friends')
    R.end()
}

app.get(["/one",'/two','/three'], function(req, response){
    reply(response)
})

app.listen(8000)