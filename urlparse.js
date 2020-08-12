let http=require("http");
let URL=require("url");

let requestprocessing= function(request, response){
    // console.log(request.url);
    let myurl=URL.parse(request.url, true)
    // console.log(myurl);

    if (myurl.pathname=="/"){ 
        response.writeHead(200, {'Content-Type': 'text/html'});
        for(let a=1; a<=10; a++){
            response.write("<A href='http://localhost:4000/timestable?t="+a+"'>"+a+"</A>")
            response.write("<br>")
     }
    response.end();

    }
    
    if (myurl.pathname=="/range"){
        response.write("<a href='http://localhost:4500/'>Home</a>")
        response.write("<br>")
        response.write("you are at the range page")
    } 
    response.end();

    
    if (myurl.pathname=="/timestable"){
        let T=myurl.query.t

        response.writeHead(200, {'Content-Type': 'text/html'});
        // response.write("<a href='http://localhost:4500/'>Home</a>")
        response.write("<br>")
        response.write("<h3>Your timestable is </h3>" +T)
        response.write('<table>')
        
       
        for(let i=1; i<=10; i++){
            response.write("<tr>")
            response.write('<td>')
            response.write(T+'x'+i+'='+(T*i));
            response.write('</td>')
            response.write("</tr>")

        } response.end();
    } 
    
    
       
}

let server=http.createServer(requestprocessing);
server.listen(4500);