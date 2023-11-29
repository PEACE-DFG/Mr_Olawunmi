// Conditional Statement si s used to perform different actions based on certain conditions
/*
types of Conditional Statements

1. if ->  to specify block of code to be executed
          only if a specified condition is true

2. else ->  to specify block of code to be executed if some conditions are false


3.  else if -> to specify new condition to test if the fisrt condition is false

4.  switch -> to specify many alternative block of codes to be executed

*/

// IF STATEMENTS
// Syntax:
/*
    if(condition){
      //code to be executed
    }
*/

const x= 5;
const y=10;

if(x>y){
  console.log('x is greater than y')
}else{
  console.log('x is less than y')
}

let Number = 255;

if(Number< 10){
  console.log('Number is  less than 10')
} else if(Number > 10 && Number <30){
  console.log('Number is between 11 and 30')
}else{
  console.log('Number is above 30')
}


console.log(new Date().getDay())

// SWITCH
/*
SYNTAX:

switch(expression){
  case x:
    // block of code
  break;
  case y:
    //block of code
    break;
    case z:
      //block of code
      break;
      default:
}
*/


switch(new Date().getDay()){
  case 0:
    day ="Sunday";
    break;

    case 1:
      day = "Monday";
      break;
      case 2:
        day = "Tuesday";
        break;
        // case 3:
        //   day = "Wednesday";
        //   break;
          case 4:
            day = "Thursday";
          break;
          case 5:
            day = "Friday";	
            break;
            case 6:
              day = "Saturday";
              break;
              default:
                day ="We are looking forward to this day"
}
console.log(day)