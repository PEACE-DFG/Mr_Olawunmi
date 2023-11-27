// Js FUNCTION -> BLOCK OF CODES THAT IS DESIGNED TO PEFORM A SPECIFIC TASK
// jS FUNCTIONIT  WILL WILL BE EXECUTED WHEN SOMETHING CALLS IT


/*
JS FUNCTION SYNTAX ->

Function keyword + function Name + Parenthesis () + curly brace {}

function functionName(parameter1,parameter2){
// code to execute
}

Function Invocation-> the codde of the function will be invioked only if it is called
->  Wjhen an event occurs [when user clicks a button]
-> When it is invoked from Javscript
-> Authomaticaly invoked [self invoked]
*/

function sum(a,b){
  return a+b
}

console.log(sum(3,6))


function times(){
  let x =3;
  let y= 5;

   return x*y

}
console.log(times())

// console.log(x);

// JS Expressions

const x =function (a,b) {return a*b}

let z= x(3,4);
console.log(z)

// the above function is called anonymous function becasuse it doesnt have a function name

// JS Funtion Constructor
const myFunction = new Function ("a","b", "return a*b")

console.log(myFunction(5,5)

)


// function hoisting

let result= Addition(9);

function Addition(y){
  return y+y;
}

console.log(result);


// Self Invoked function

(
  function (){
    document.getElementById('demo').innerHTML=" I called myself"
    
  }
)();

// Arrow Function

// Normal Function
var m = function(r,s){
  return  r*s;
}

// Arrow function

const m = (r,s) => r*s;
