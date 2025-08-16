// Immediately Invoked Function Expressions...

// syntax :- (function definition)()  >>>>>>>>>>>>> second parenthesis used for run the function 

// IIFE jinka naam bhi hota hai called 'named IIFE' i.e. normal function used as IIFE called as 'named IIFE'
(function random(){
    console.log("Dbase Connected using normal function! ");
})();

// NOTE :- first IIFE ke baad second IIFE ko run krne k liye , phle first IIFE ko end krna pdega which is done by using semicolon at the end of the first IIFE
// +++++++++++++++arrow function as IIFE

(() => {
  console.log("Dbase connected using Arrow function!");
})();

// NOTE :- Why IIFE are used? >> to run function immediately and to avoid unwanted pollutants from global scope.....

// passing and accesing of parameters and arguments in IIFE:-
((nameOfUser) => {
    console.log(`Dbase connected using Arrow function by ${nameOfUser}`);
})("DeepRajput");
(function nameOfUserIs(nameOfUserIs) {
    console.log(`Dbase connected using Normal function by ${nameOfUserIs}`);
})("AmanRajput");