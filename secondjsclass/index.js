/*
Javascript Operators 
1. Arithmetic Operators->
  -> + - Addition
  -> - Subtraction
  -> / - Divide
  -> * - Multiply
  -> ** - Exponential [Raise to the power]
  -> ++ - increment
  -> -- - decrement
  -> % - Modulus [Remainder]
2. Comparison Operators ->

  -> ==  - equal to
  -> ===  equal value and equal datatype
  -> !=   not equal to
  -> !== not equal value or not equal datatype
  ->  <  less than
  -> > greater than
  -> >= greater than or equal to
  -> <= less than or equal to
  -> ?  tenary operator 

3. Logical Operators -> 

  ->  %%  AND
  -> ||  OR
  ->  ! NOT

  4. Assignment Operator -> 
  ->   =    ;   x=y    ; x=y
  ->   +=   ;   x+=y   ;  x=x+y;
  ->   -=   ;   x-=y   ; x=x-y;
  ->   *=   ;   x*=y   ; x=x*y  
  ->   /=   ;    x/=y ; x=x/y ;
  ->   %= ;     x%=y ;   x=x%y
  ->    **= ;   x**=y ; x=x**y;


  ORDER OF PRECEDENCE 
  1   ()  -> Parenthesis
  2.  **  -> Exponential
  3.  Multipluication and division -> * and /
  4.  Addition and Subtraction ->   + and -
   */
console.log(50 + 4)
console.log(50 - 4)
console.log(50 * 4)
console.log(50 ** 4)
console.log(50 / 4)
console.log(10%2)

let x=5;
x++;
let z=x;

console.log(50 == 4)
console.log(50 !== 4)
console.log(50 > 4)
console.log(50 < 4)
console.log(50 <= 4)
console.log(50 >= 4)
document.getElementById('demo').innerHTML=z;

console.log(5 + (2+1) ** 2)


// JAVASCRIPT DATATYPES

/*
  1. String -> anything wrapped in quotaion  [ either single or double]
  2. Number -> either with decimal point or not number is number
  3. Boolean -> true or false 
  4. Undefined ->  not defined
  5. Array -> single variables with multiples values
  6. Object -> containes names and values

*/


let firstName = ' Peace'

let age = 50;

console.log(typeof(age))
console.log(typeof(true))
console.log(typeof(firstName))

let r;

console.log(r);


const cars = [ 'BMW', 'TOYOTA', 'HONDA', 'LEXUS']


console.log(cars)
console.log(typeof(cars))
console.log(cars[3])



// object

const person = {firstName: 'John', lastName: 'Smith',age:50, eyeColor:'blue' }
console.log(person)
console.log(person.eyeColor)
