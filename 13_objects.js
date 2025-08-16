//objects singleton or constructor

// diff b/w singleton object or non-singleton object
const jsUser = new Object() // singleton
const jsUser2 = {} // non-singleton

// object inside object (nesting)

const regularUser = {
    email : "#@gmail.com",
    UserName : {
        fullName : {
            firstName : "Deep",
            lastName : "Rajput"
        }
    }
}
// accessing the values
console.log(regularUser.UserName);
console.log(regularUser.UserName.fullName);
console.log(regularUser.UserName.fullName.firstName);
console.log(regularUser.UserName.fullName.lastName);



const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}

const obj3 = { obj1, obj2} // object inside object
console.log(obj3); // { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }

// assign
const obj4 = Object.assign(obj1,obj2)
console.log(obj4); // { a: 1, b: 2, c: 3, d: 4 } // ye bhi correct hai...

// but starting me ek empty () bhi dena chahiye jisse assure ho jaye ki sbhi obj ki values combine hoke guaranteed ek obj me chali jaye
const obj5 = Object.assign({},obj1,obj2); // {} k baad jitne bhi objects honge vo assign hoke {} me aa jayenge , but{} optional hai...
console.log(obj5); // { a: 1, b: 2, c: 3, d: 4 }


// spread method
const newObject = {...obj1,...obj2} // easy and mostly used method
console.log(newObject); // { a: 1, b: 2, c: 3, d: 4 }


// +++++++++++++++++++++++++++++++++ data from DBase ++++++++++++++++++++++++++ objects inside array
const userArray = [
    {
        name : "DeepRajput",
        course : "js"
    },
    {
        name : "AmanRajput",
        course : "c++"
    },
    {
        name : "randomUser",
        course : "nothing"
    }
]
// console.log(userArray);
console.log(userArray[1]); // indexing se koi vi value access kr skte hai , bcoz userArray is an Array.

console.log(userArray[0].name); // DeepRajput

// +++++++++++++++++++++++++++++More objects methods+++++++++++++++++++++++++
console.log(Object.keys(regularUser)); // [ 'email', 'UserName' ] // objects.keys(objectName) se jb keys access krenge to array format me aati hai....
// aise hi values access kr skte hai....
console.log(Object.values(regularUser)); 
/* [
  '#@gmail.com',
  { fullName: { firstName: 'Deep', lastName: 'Rajput' } }
] */

// hr ek key values ko array me show krega...
console.log(Object.entries(regularUser)); // [ [ 'email', '#@gmail.com' ], [ 'UserName', { fullName: [Object] } ] ]

// if values doesnt exist in object , to check this:-
console.log(regularUser.hasOwnProperty('email')); // true
console.log(regularUser.hasOwnProperty('Email')); // false
