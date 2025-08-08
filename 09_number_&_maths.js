// numbers

// declaration 1.
const simpleNumber = 400
console.log(simpleNumber); // 400 
console.log(typeof(simpleNumber)); // number 

// 2. using new keyword and Number
const secondNumber = new Number(400)
console.log(secondNumber); // [Number: 400]
console.log(typeof(secondNumber)); // object
// can can different methods of Number using the above syntax

// using diff methods with ex :-
console.log(secondNumber.toString()); // converts it as string 
console.log(typeof(secondNumber.toString())); // returns it as string 

// Note :- now it becomes a string , so we can also use string methods in it. ex:-
console.log(secondNumber.toString().length); // 3

// other methods of number:-
console.log(secondNumber.toFixed(1)); // 400.0

const precisionNumber = 23545.48392
console.log(precisionNumber.toPrecision(6));

const hundreds = 1000000000
console.log(hundreds.toLocaleString()); // 1,000,000,000
console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,00,000

// ++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++
console.log(Math); // Object [Math] {} >> can check all methods in console
console.log(Math.abs(-11)); // gives absolute value
console.log(Math.round(4.7)); // 5 >> round off the value
console.log(Math.ceil(4.1)); // 5 >> always use the upper value for round off
console.log(Math.floor(4.9)); // 4 >> always use the lower value for round off
console.log(Math.min(1,2,3,4,5,6,7,8,9,10)); // 1 >> returns smallest number
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); // 10 >> returns largest number
// you can check and access all other Math methods from console

console.log(Math.random()); // gives a random no. b/w 0-1
console.log((Math.random() * 10) + 1);  // above 1

// to remove decimal can use ceil and floor method
console.log((Math.floor(Math.random() * 10 + 1))); // give lower value
console.log((Math.ceil(Math.random() * 10 + 1))); // give upper value


// ex:- if want a specific no. b/w given range:-
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1) + min)); // condition may vary according to different no. and range....



















