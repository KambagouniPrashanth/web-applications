// function in javasript

// function add(a,b){
//     console.log(a+b);
// }
// add(4,5)


// function add(a,b){
//    return a+b
// }
// console.log(add(6,4));
// document.writeln(add(4,5))



// var multiply=function add(a,b){
//     console.log(a*b)
// }
// console.log(multiply)


// var multiply=function add(a,b){
//     console.log(a*b)
// }
// console.log(multiply(4,5))
// document.writeln(multiply(5,6))




// var multiply=function add(a,b){
//     return a*b
// }
// console.log(multiply(2,3))
// document.writeln(multiply(4,5))


// var a=prompt("enter the value of a")
// var b=prompt("enter the value of b")

// var multiply=function add(a,b){
//     return a*b
// }
// console.log(multiply(a,b))
// document.writeln(multiply(a,b))



// var a=prompt("enter the value of a")
// var b=prompt("enter the value of b")

// var multiply=function add(a,b){
//     return a+b
// }
// console.log(multiply(a,b))
// document.writeln(multiply(a,b))



// var num=prompt("Enter a number")


// var checkNumEven=function(num){
//     console.log(typeof num%2);
//     if(num%2==0)
//     return true
//     else
//     return false
// }
// console.log(checkNumEven(num))
// document.writeln(checkNumEven(num))


var num=prompt("Enter a number")

// anonymous function
var checkNumEven=(num)=>{
    console.log(typeof num%2);
    if(num%2==0)
    return true
    else
    return false
}
console.log(checkNumEven(num))
document.writeln(checkNumEven(num))


// anonymous function
var sum=(a,b)=>a+b
console.log(sum(10,15));
document.writeln(sum(20,25))






