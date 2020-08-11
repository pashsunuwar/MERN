let ref = {
            "id": 23,
            "name": "pash",
            "score": [12,50,24]
}
console.log(ref);
console.log("Id: ", ref.id);
console.log("Name: ", ref.name);
ref.score.forEach(function(data){
    console.log(data);
})