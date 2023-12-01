// String are for storing datas and manipulating text
// Single quote or double;

let text = "My Name is Peace  ";
console.log(text);

// How to get the length of a string

// .Length

let value = text.length
console.log(value);


let text1 = 'We are the so called \" Vikings \" from the north';

console.log(text1);

/*      CODE        RESULT
          \'           '
          \ "           "
          \\            \

*/

let text2 = 'It\'s alright'
console.log(text2);

let text3 = "The Character \\ is called backslash";

console.log(text3);

// Breaking long codes

document.getElementById('demo').innerHTML ="Hello \
 World!";


document.getElementById('demo1').innerHTML="Hello" + "World!";


// String Methods

/*
1. Length - >  return the length of a string
*/

let text4='1234567890'
console.log(text4.length);

// 2. EXTRACTING PARTS

/*
-> Slice Methods ->  slice(start,end); = extracts part of a string and return the extracted parts in a new String

-> Substring Method -> substring(start,end) = performs same function as slice but does not take in a negative parameter like slice

-> Substr  Methond -> substr(start,length) 
*/


let text5="Banana,Apple,Orange";
let part = text5.slice(7,12);
let singlePart=text5.slice(7);
let negPart= text5.slice(0,-1);

console.log(part);
console.log(singlePart);
console.log(negPart);


console.log(text5.substring(7,12))

console.log(text5.substr(7,3));



// REPLACING STRING CHARACTERS
/*
 -> replace() - > replaces a specified value with another value
    #### it is case sensitive
    #### replaces only the first match
*/

let text6="Please visit Google!, Google";
let newText= text6.replace("Google", "Facebook");

console.log(newText);


let text7= "I love Dogs. Dogs are very easy to love, Dogs are very popular";

let newTest = text7.replaceAll("Dogs","Cats");

console.log(newTest);


// CHANGING CASES OF CHARACTERS

let small= "i am small";
let big = "I AM BIG";

console.log(small.toUpperCase());
console.log(big.toLowerCase());

// Trim()-> removes whitespaces 

let text8 = "                  Heeloo world         ";

console.log(text8);
console.log(text8.trim())
console.log(text8.trimStart())
console.log(text8.trimEnd())


// Padding -> pads a string to another string

let text9 ="5";
console.log(text9.padStart(4,"x"));
console.log(text9.padEnd(4,"x"));


// extracting string characters
/*
-> charAt()- >  return character of the specified index
-> CharCodeAt()-> retuns UTF-16 (numbers from 0 - 65535)
-> property Access -> [ ] it looks at a string in form of an array, it  behaves unpredicatable

*/

let text10 ="HELLOO WORLD!";
console.log(text10.charAt(0))
console.log(text10.charCodeAt(0))

console.log(text10[1]);


// Javascript Search Method

/*
1. Indexof -> returns an index in where character is first poccurence found
2. lastindexOf()-> return the last occurence
3. search method()-> search is same as indexOf but does not take in a second parameter
4. match()
5. matchAll()
6. includes()
*/

let text11= "Please locate where locate is";

console.log(text11.indexOf("locate",13))
console.log(text11.lastIndexOf("locate"))
console.log(text11.search("locate"))
console.log(text11.match("locate"))

const iterator =text7.matchAll("Dogs");

document.getElementById("demo2").innerHTML= Array.from(iterator);

console.log(text11.includes("locate"));


let firstName = 'John';
let lastName = 'Doe';

let text20 = ` Welcome ${firstName} ${ lastName} `;
document.getElementById("demo3").innerHTML= text20;



