//localhost:8000/maths/add/2/4
//localhost:8000/maths/sub/2/4

let express = require('express')
let app = express()

// let reply = function(R){
//     if (req.params.opt == "add"){
//         let x = parseInt(req.params.x)
//         let y = parseInt(req.params.y)
//         res.write("Result: "+ (x+y))
//         res.end()
//     }
//     if (req.params.opt == "sub"){
//         let x = parseInt(req.params.x)
//         let y = parseInt(req.params.y)
//         res.write("Result: "+ (x-y))
//         res.end()
//     }
// }

app.get("/maths/:opt/:x/:y", function(req, res){
    if (req.params.opt == "add"){
        let x = parseInt(req.params.x)
        let y = parseInt(req.params.y)
        res.write("Result: "+ (x+y))
        res.end()
    }
    if (req.params.opt == "sub"){
        let x = parseInt(req.params.x)
        let y = parseInt(req.params.y)
        res.write("Result: "+ (x-y))
        res.end()
    }
    // R(request, response);
})



app.listen(8000)