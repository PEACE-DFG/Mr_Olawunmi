//  Javascript has only one type of number

let x= 3.14;
let y=3;

// large number and extra small
console.log(123e5)
console.log(123e-5);


// Integer Precision
// accurate up till 15 digits

let n = 999999999999999;
let m = 9999999999999999;
console.log(n)
console.log(m);

// floating precision
// the maximum number of decimals is 17

console.log(0.2 + 0.1);


// adding numbers and strings
// + -> addition and concatenation

let l="10";
let w= 20;
let e= 15;

let z= l+w;
console.log(z)
console.log(w+e+l);
/*
 "10 " + 20 ->  1020
*/

// Numeric String
let a= "100";
let b="10";
console.log(a/b);
console.log(a*b);
console.log(a-b);
console.log(a+b);

// NaN -> Not a Number

let d=100;
let g= "Apple";

console.log(d/g)

// toString(): return s a number as a string
let number = 123;
let value = number.toString()

console.log(value)
console.log(number)

console.log(typeof(value))
console.log(typeof(number))


// toExponential(parameter)-> return a string with a number rounded written in exponential notation

let exp= 9.656;
console.log(exp.toExponential(2));
console.log(exp.toExponential(1));


// toFixed(parameter) -> like toexponential but not in exponential form

console.log(exp.toFixed(2))

// toPrecision(parameter) -> returns a string with a number but writtenin a specified length

console.log(exp.toPrecision(7))

// valueof() -> returns a number as a number

console.log((100+23).valueOf());

// converting variables to numbers

/*
1. Number () method -> converts variables to numbers
2. parseInt() method -> parses a string and returns whole numbers, spaces are allowed, it will return the first number
3. parseFloat() method -> parses a string and returns a number, spaces are allowed, it will return
*/

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("10,33"));
console.log(Number("John"));


console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"))
console.log(parseInt("years 10"))
console.log(parseInt("10,33"))


console.log(parseFloat("10.33"));


// Generate Random Numbers

let randumNumbers = Math.random() ;

// generate between 1 and 10
let randumNumber = Math.random()*100000 ;

console.log(randumNumbers)
console.log(Math.floor(randumNumber))




