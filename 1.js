let http=require('http')
let URL=require('url')

let server = http.createServer(function(request, response){

    let myurl = URL.parse(request.url, true)
    console.log(myurl.query);
    console.log("My name is ", myurl.query.name);
    console.log("I live in ",myurl.query.address);
    console.log("You can reach me at ",myurl.query.phone);
    console.log('Or you can email me at ', myurl.query.email);

})

server.listen(8000)