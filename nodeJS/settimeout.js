function first(f){
    //simulate a code delay
    setTimeout( function(){console.log("QA");},500)
    f()
}

let F1=function second(){
    console.log("Consulting");
}

first(F1)
// F1();