// 1. string concatenate
const name = "deep "
const repositoryCount = 50
// console.log(name + "with count " + count); // old method outdated


// string interpolation >> using back ticks and placeholders
console.log(`Hello myself ${name}with repository count ${repositoryCount}`);

// we can add more valid methods with using string interpolation like upperCase or etc. ex:- ${name.toUpperCase()}
console.log(`Hello myself ${name.toUpperCase()}with repository count ${repositoryCount}`);

// one more method to declare string >> using 'new' keyword
const cocName = new String('Alpha')
console.log(cocName); // [String: 'Alpha']
console.log(typeof(cocName)); // object
// output :- it gives string as an object and gives us all properties and method
/*   String {'Alpha'}
     0:"A"
     1:"l"
     2:"p"
     3:"h"
     4:"a"
     length:5
     [[Prototype]]:String
     [[PrimitiveValue]]:"Alpha" */

     // accessing key
     console.log(cocName[0]); // A
     
     // accessing prototype
     console.log(cocName.__proto__); // node me {} empty object show hota hai, but console me complete aayega...


     // running some methods

     console.log(cocName.length);

console.log(cocName.toUpperCase());
console.log(cocName.toLowerCase());
// // lekin ye dono method original string ko change nhi krenge bcoz of stack memory allocation(management)!

console.log(cocName.charAt(0)); // put index and get character 
console.log(cocName.indexOf('D')); // put character and get index // if char is not present then it will show -1

// // try other methods of string also >> can find all methods in console window

// substring
const randomName = 'Deep-Rajput'
const aSubString = randomName.substring(0,4) // 0 included, 4 excluded // can't give -ve values in substring
console.log(aSubString); // output >> Deep 


// slicing
const stringSlicing = randomName.slice(0,4)  // can also give negative values in slice method
console.log(stringSlicing); // Deep 



// // NOTE => read MDN document for more!

// // str.trim() => remove whitespaces only of starting and ending of string. 
// // str.replace(searchVal, newVal) // search and replace the value.

// const url = "https://deeprajput.com/deep%20rajput"
// console.log(url.replace('%20', '-'));

// // to find any word in string
// console.log(url.includes('deep')) // true
// console.log(url.includes('sahil')) // false