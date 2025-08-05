let value = 1
let negValue = -value
console.log((negValue)); // -1

//********************//

console.log(1+1);
console.log(1-1);
console.log(1*1);
console.log(2**2); // 2 raise to the power 2
console.log(2/2); // divide gives quotient
console.log(2%2); // modules gives remainder

// ********************//

let str1 = "Deep"
let str2 = " Rajput"

let str3 = str1 + str2 // only can do addiction , can't do subtraction
console.log(str3); // Deep Rajput

// // IMPORTANT >

// console.log("1" + 2);   //12 // concatenate
// console.log(1 + "2");   //12

// //  but if
// console.log("1" + 2 + 2);   // 122 >> agr string first hai to sbko string me treat kiya jayega

// // can check reason on ECMAScript

// console.log(1 + 2 + "2"); //  <1+2> + 2 => 32  >> agr string last me hai to pehle jo hai vo conversion ho jayega!      


// // not prefered to do these type of conversion
// console.log(+true); // 1
// console.log(+""); // 0 

// console.log(true); // true
// console.log(false); // false

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let x = 2
// console.log(x); // 2
// let y = x++
// console.log(y); // 2
// console.log(x); // 3
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let a = 10
// console.log(a); // 10
// let b = ++a
// console.log(a); // 11
// console.log(b); // 11
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++



/* Description --> 

if used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing

if used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing

*/
