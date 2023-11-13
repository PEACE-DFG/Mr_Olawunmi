// Outputing your javascript
/*
1. DOM -> document Object Model [innerHTML]
2. document.write() -> write directly to the webpage
3. windows.alert() -> alert messages
4. console.log() -> console.log in the developer tool
*/

document.getElementById('first').innerHTML='My first Javascript program';
document.getElementById('first').style.color='red';
 document.write('Welcome to Javascript class')
 window.alert('Welcome to Javascript class')
 console.log('Hello there!');

//  JS statement -> includes values, operators,expressions,keywords and comments.

// Javascript Variables 
// let , var  and const 

// Variable declaration
let x;
var y;
let X;

// Assigning variables
const z=3;
x=5;
X=0;
y=7;

console.log(X);

// Rules of variables
/*
1. keywords are not allowed in naming variables
2. variables can contain letters, numbers, and underscores
3. variables cannot start a number or underscore
4. variables are case sensitive
5. using let and var variables can be reassigned unlike const
*/

// Fixed values or literals
/*
1.  Numbers is numbers either with or without decimal
2.  String literals are text written in between a quotation either single or double quootes
*/

let Name = 'My name is Peace'
console.log(Name)
