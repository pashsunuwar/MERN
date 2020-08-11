// console.log("hello my friends");

// let phy=80;
// let che=90;
// let mat=100;
// let total = phy + che + mat;
// let per=total*100/450;
// console.log("Result: ", total);
// console.log("Your percentage is : ", per);

// let A=20;
// if (A>20); console.log("good");

// let B=20;
// if (B>20)
// {
//     let C=20;
//     console.log("good");
//     console.log("The value of C:", C);
// }
// console.log("The value of C:", C);

// let A=1;
// while (A <= 10) {
//     console.log(++A);
// }

// let A=1;
// while (A <= 10) {
//     ++A
//     console.log(A);
// }

// let A=1;
// while (A<=10){
//     A++;
//     if (A==5){
//         continue;
//     }
//     console.log(A)
//     // if(A==5){break}
// }

// let A = 1;
// QA: while (A<=10){
//     let b=1;
//     A++;
//     QAC: while(b<=10){
//         b++;
//         if (b==5){
//             continue QA;
//         }
//         console.log(b);
//     }
//    console.log("....", A);
// }

// let A = 1;
// while (A<=10) {
//     let b = 1;
//     while (b<=10){
//         if (b==5){
//             continue;
//         }
//     console.log(b++);

//     }
//     console.log(A++);

// }

// let x = 1;
// while (x <=10) {
//     if (x==7){
//         break;
//     }
// console.log(x++);
// }

// for (a=1, b=10, c=100; a <=10; a++, b+=10, c+=100){
//     console.log(a, "...", b, "..", c,".");
// }

// let a=1;
// let b=10;
// let c=100;
// for (;a<=10;){
//     console.log(a,b,c)
//     a++
//     b+=
//     c+=
// }

// let a=1 
// for (a=10;;a++){
//     console.log(a);
//     if (a==20){
//         break;
//     }
// }

// function boom () {
//     return 45;
// }

// let result = boom() + 100

// console.log(result)
// console.log(boom());

// if (boom() < 20){
//     console.log("hello");
// }else{
//     console.log("bye");
// }

// function message(A) {
//     console.log("hello: ", A);
// }

// message("Pash");
// message("Shafeeq");
// message("Poo");

// function maths(opt="add", no1=0, no2=0){
//     let result = 0
//     if (opt=="add"){
//         result=no1+no2;
//         console.log("THe result is: ", result);
//     }
//     if (opt=="sub"){
//         result=no1-no2;
//         console.log("THe result is: ", result);
//     }
//     if (opt=="multiply"){
//         result=no1*no2;
//         console.log("The result is:", result);
//     }
//     if (opt=="divide"){
//         result=no2/no1;
//         console.log("The result is: ", result);
//     }
// }
// maths("sub", no1=10, no2=3,)
// maths("sub", 2,3)
// maths("multiply", 5, 10)
// maths("divide", 10,20)
// maths()

// function add(a,b){
//     let result=0
//     console.log(arguments);
//     let i=0
//     while(i<arguments.length){
//         console.log("->", arguments[i]);
//         result += arguments[i]
//         i++
//     }
//     console.log("The total is: ", result);

//     let x = arguments[4];
//     let y= arguments[3];
//     let z= arguments[5];
//     console.log("the highest number is ", x);
//     console.log("the second highest number is ", y);
//     console.log("the third highest number is ", z);
// }
// add(2,3,12,40,456,32)

function findNum(){
    let highest=arguments[0];
    let i=1;
    while(i < arguments.length){
        if(arguments[i] > highest)
        highest = arguments[i]
    }
    i++
    console.log(highest);
}
findNum(12,25,36,1,2,547,659,1,21,12)