// this  >> refers to current context
// ex:-
/* Object Method: When a normal function is called as a method of an object (e.g., myObject.myMethod()), this inside the function will refer to the object itsel */
const user = {
    username : "DeepRajput",
    web_register_price : 1000,
    welcomeMsg : function(){
        console.log(`${this.username}, welcome to website...!`);
        console.log(this); // prints complete object, bcoz yaha pe this object k ander hai to console k time ye object ko refer krega as a current context...
        
    }
}
user.welcomeMsg() // DeepRajput, welcome to website...!

user.username = "AmanRajput"
user.welcomeMsg() //  AmanRajput, welcome to website...!

// phle wale me "this" username:"DeepRajput" ko refer kr rha tha as a current context...but next me username change krke AmanRajput kr diya to "this" username : "AmanRajput" ko refer kr rha hai as a currrent context.....so basically this refers to current context

// using this in global environment...
console.log(this); // {} >>> node me empty object show krta hai but browser me it refers to complete window object!


// Important :- If a regular function is invoked as a standalone function (e.g., func()), this typically refers to the global object (window in browsers) in non-strict mode, or undefined in strict mode.



// ++++++++++++++Detailed ex of this +++++++++++++++++
/*// Example of 'this' in a regular function
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const person1 = {
    name: "Alice",
    greet: greet // Assigning the function as a method
};

const person2 = {
    name: "Bob",
    greet: greet
};

person1.greet(); // Output: Hello, my name is Alice (this refers to person1)
person2.greet(); // Output: Hello, my name is Bob (this refers to person2)

const standaloneGreet = greet;
standaloneGreet(); // Output: Hello, my name is undefined (in non-strict mode, this refers to the global object, and 'name' is not defined on the global object)
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++



// Arrow functions:-

// simple arrow function >> called explicit return >> means have to write/add return explicitly
const addTwo = (v1,v2) => {
    return v1+v2
}
console.log(addTwo(1,2)); // 3

// ++++++++++++++++++ we can also do like this:- >> called implicit return >> means don't have to write/add return explicitly
const subTwo = (n1,n2) => n1-n2
// const subTwo = (n1,n2) => (n1-n2) // >> 64 or 65 k syntax me bs () add kiye hai jo ki dono valid statements hai....
console.log(subTwo(3,2)); // 1

// +++++++++++++++++++++++++++++++ why we need to use () in implicit return or line no 65,,,,,, agr hme arrow function me object define krna hai to !?
const accessObject = (value1,value2) => {usernameIs : "DeepRajput"}
console.log(accessObject()); // undefined....
// object ko access krne k liye () me wrap krna hi pdega....
const accessObject1 = (value1,value2) => ({usernameIs : "DeepRajput"})
console.log(accessObject1()); // { usernameIs: 'DeepRajput' }

