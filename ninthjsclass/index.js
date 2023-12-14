/*
Javascript loops can execute a block of codes for a number of times
it can run the code over and over again
*/


const cars= ["Toyota","BMW", "HONDA", "FORD","AUDI"]
let text="";

for(let i=0; i<cars.length; i++){
  text += cars[i] + " <br/>";
}
document.getElementById("demo").innerHTML=text;

// Differnet kind of loops

/*
1. for -> loops through a block of code for a number of times
2. for/in -> loops through properties of objects
3. for / of-> loops through properties of Array
4. while -> loops through a block of codes only when the specified condition is true
5. do/while -> also loops through a block of code only while the specified condition is true
*/

// for loop syntax

/*
    SYNTAX-> 
    for (expression 1; expression 2 ; expression 3){
      //code to execute
    }

    Expression 1: is executed (on time) before the execution of the code block
    Expression 2: defines the condition for executing the code block
    Expression 3: executes (every time ) after the code block has beeen executed
*/

let numbers="";
for (let i=0; i<5; i++){
  numbers += "The number is " + i + "<br/>";
}
document.getElementById("demo1").innerHTML= numbers;

// for/in

/*
SYNTAX -> 
for(key in Object){
  //code to be executed
}
*/

let person ={fname: 'John',lname: 'Doe',age:25}
let txt="";

for(let x in person){
  txt+= person[x] + " ";
}
document.getElementById("demo2").innerHTML= txt;

// for/of

/*
SYNTAX-> 
for(variable of iterable[Array]){
  //code to be executed
}
*/

let trt="";
for(let y of cars){
  trt += y + "<br/>"
}
document.getElementById("demo3").innerHTML= trt;


let language ="JAVASCRIPT";
let lang ="";
for(let j of language){
  lang += j + "<br/>"
}
document.getElementById("demo4").innerHTML= lang;



// WHILE LOOP

/*
SYNTAX-> 
while (condition){
  //code
}
*/

// let den="";
// let i=1;
// while(i<10){
//   den += "The number is " + i ;
//   i++;
// }
// console.log(den);

// do/while

/*
SYNTAX-> 
do{
  //code
}
while (condition);
*/
let de=""
let i=1;
do{
  de += "The number is " + i ;
  i++;
}
while(i<10)
console.log(de)