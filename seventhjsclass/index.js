// Array is a special variable that holds more than a value
/*
let x= 'John';

*/

// const cars=[
//   "Volvo",
//    "toyota",
//     "BMW"
//   ];
// console.log(typeof(cars));
// console.log(cars);
// console.log(cars[2]);

/*
let car1 = "Volvo";
let car2 = "toyota";
let car3 = "BMW";


*/

// const cars=[];


// console.log(cars);

// cars[0]="Volvo";
// console.log(cars);

// cars[1]="BMW";
// console.log(cars);

// creating array with a Javascript keyword
const cars = new Array("Volvo","BMW");
console.log(cars);


console.log(cars[1])
// arrays index number starts from 0

cars[0]= "Honda";
console.log(cars);

console.log(cars.length);

// const fruits=["banana","apple","Mango","orange"]

// console.log(fruits[fruits.length - 1]);


// array methods

/*
1. toString -> converts array to string
2. Popping and Pushing -> Popping means to remove items from and array
                          while pushing means to add items to an array
3. shift and unshift method -> shift REMOVES value to the front of the array
                          WHILE UNSHIFT adds value to`the beggining of the array 
4. concat method -> it is ised to merge more than one arrays together
 */

// document.getElementById("demo").innerHTML=fruits.toString();
// document.getElementById("demo1").innerHTML=fruits.pop();
// document.getElementById("demo2").innerHTML=fruits;
// document.getElementById("demo3").innerHTML=fruits.push("Guava","Pineapple");
// document.getElementById("demo4").innerHTML=fruits;
// document.getElementById("demo5").innerHTML=fruits.shift();
// document.getElementById("demo5").innerHTML=fruits;
// document.getElementById("demo5").innerHTML=fruits.unshift("Pineapple");
// document.getElementById("demo5").innerHTML=fruits;


const myGirls=["Joy", "Celliene", "Joyce"]
const myBoys=["Paul", "Peter", "Silas"];

const children =myGirls.concat(myBoys);

console.log(children);
// arr1.concat(arr2,arr3,arr4);

/*
5. splice -> adds new items to an array
fruits.splice(2,0,"lemon")

first parameter (2)-> defines the position where new elements should be added
second parameter (0)-> defines how many elements should be removed

*/

const fruits=["banana","apple","Mango","orange"];
fruits.splice(2,2,"lemon","Grapes");
console.log(fruits);
console.log(
fruits.splice(0,1)
)
console.log(fruits)
console.log(fruits.slice())














