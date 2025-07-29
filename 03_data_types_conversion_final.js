let point = 12;
console.log(point);
// here 12 which is stored in variable 'point' is a number

// checking typeof 1) way
console.log(typeof point); // number

// checking typeof 2) way
console.log(typeof (point)); // number

// but if we store the given value i.e. 12 in "" then the typeof value will be string.
// ex:=

let score = "12a"
console.log(score);
console.log(typeof score);  // string
console.log(typeof (score)); // string


// Data Conversion :- ex:- if you are given a string like '12' but you want to work on number i.e. 12, you can simply converse the data:- ex:-

// you already know that variable 'score' is a string

let changingScoreVariableInNumber = Number(score) // // // // Data type conversion k time jis DT me change krna hai uska first letter capital format me likhenge.

// hmne score variable ko Number method me use krke usko new variable me store kiya hai to finally vo forcefully number me convert ho gya hai...

console.log(typeof changingScoreVariableInNumber);

console.log(changingScoreVariableInNumber); // but iski value NaN aayegi bcoz ye reality me to number hai hi nhi...

// try to do with different DT :-

let randomVariable = null
console.log(randomVariable); // null
console.log(typeof randomVariable); // object

let ChangingRandomVariableInNumber = Number(null)
console.log(ChangingRandomVariableInNumber); // 0 
console.log(typeof ChangingRandomVariableInNumber); // number

// also try it with undefined, boolean:- true,false


// conversion in boolean
let logIN = "deep rajput"
let booleanLogIn = Boolean(logIN);
console.log(booleanLogIn); // true

let emptyString = ""
let logInEmptyString = Boolean(emptyString);
console.log(logInEmptyString); // false

// conversion in string

let someNumber = 123
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string

