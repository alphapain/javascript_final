// >,<,>=,<=,==,!=

console.log("2" >1); // true
console.log("02" >1); // true

console.log(null >0); // false (1)
console.log(null ==0); // false (2)
console.log(null>=0); // true (3)

// the reaspn is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That's why (3) null >=0 is true and (1) null>0 is false.

console.log(undefined ==0); // false (2)
console.log(undefined >0); // false (1)
console.log(undefined>=0); // false (3)

// = assignment
// == equality check i.e. equal value
// === strict check i.e. equal value and equal data types