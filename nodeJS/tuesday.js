// function add() {
//     let first = 0
//     let second = 0 
//     let third = 0
//     let i = 0
//     while (i<arguments.length){
//         if(arguments[i]>=first){
//             third=second
//             second=first
//             first=arguments[i]
//         }else if(arguments[i] >=second && arguments[i] < first){
//             thrid=second
//             second=arguments[i]
//         }else if(arguments[i]>=third && arguments[i] < second){
//         third=arguments[i]
//         }
//         i++
//     }
//     console.log("highest: ", first);
//     console.log("second highest: ", second);
//     console.log("third highest: ", third)
// }
// add(12, 7, 54, 31, 2, 5, 66, 41, 7, 333, 333)

// let add =function(a,b){
//     console.log(a, "+", b, "=", (a+b));
// }

// let sub =function(a,b){
//     console.log(a, "-", b, "=", (a-b));
// }

// function maths(ref){
//     ref(20,15)
// }
// function maths(add){
//     add(20,15)
// }
// function maths2(ref1, ref2, num1, num2){
//     ref1(num1, num2)
//     ref2(num1, num2)
// }

// function operation(day) {
//     let f= function(){
//         console.log("hello");
//         console.log("my");
//         console.log("friends");
//     }
//     return f;
// }

// operation(1)

// let fun=operation()
// fun()

function operation(day){

    if (day==1){
        var F=function(){
            for(let A=1; A<=10; A++){
                console.log(A);
            }
        }
    }
    if (day==2){
        var F=function(){
            console.log("hello my friends");
        }
    }
    return F

}

let fun=operation(2)
fun()