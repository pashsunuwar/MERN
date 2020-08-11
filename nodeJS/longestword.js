function longestword(message){
console.log(message);
let space = message.split(' ');
let longestWord = 0;
console.log(space);
for (let i=0; i<space.length; i++){
    if (space[i].length > longestWord){
        longestWord = space[i].length
    }
}
console.log("The longest word is ", longestWord);
}

longestword("I am going to london, and will be back tomorrow")