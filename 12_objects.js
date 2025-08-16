// constructor se object bnega to singleton bnega or literal se bnega to singleton nhi bnega...


// declaration of objects :-

//constructor method :-
// Object.create :- isse singleton bnta hai...

// array me indexing hoti hai or objects me key-values pairs hote hai....

// objects literals
const jsUser = {
    name: "Deep",
    age : "19",
    email : "123@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["M", "W"],
    0 : "zero",
    "full name" : "DeepRajput",
}

// accessing methods :- ObjectName.key
console.log(jsUser.name);

// using square brackets
console.log(jsUser["name"]); // by defaults keys string format me hi notice ki jaati hai,  to is method me [""] ye format rhega....


console.log(typeof jsUser["0"]); // string, but we can't access it through object.key method, number values square brackets se hi access hongi....
console.log(jsUser[0]); // output :- zero 


//+++++++++++++++++++case for symbol+++++++++++++++++++++

// how to declare a symbol and use it in an object as key and access that through key-values....

const mySymbol1 = Symbol('rajputDeep') // symbol created

// using in object 
const newObjectForSymbol = {
    code : "jswithChaiAurCode",
    // how to use symbol in object
    [mySymbol1] : "randomValueInSymbol", // used as symbol
    mySymbol : "randomValueInString" // used as string
}

console.log(newObjectForSymbol.mySymbol) // yaha string access ho rhi hai......>>  mySymbol : "randomValueInString"
console.log(typeof newObjectForSymbol.mySymbol) // string


// accessing the symbol
console.log(newObjectForSymbol[mySymbol1]); //     [mySymbol] : "randomValueInSymbol", // used as symbol
// symbol square brackets notation me hi define hoga or access hoga..... can't access symbol with . notation....

console.log(newObjectForSymbol); 

//++++++++++++++++++++++++++++++++++++++++


// changing values of an object :-
jsUser.name = "DeepRajput"
console.log(jsUser.name); // DeepRajput

// freeze the object :- ex uper DeepRajput change kiya hai or niche AlphaFury , but object freeze krne k baad value change nhi kr skte...
// Object.freeze(jsUser) 
jsUser.name = "AlphaFury"
console.log(jsUser.name);


// adding functions in objects:- // phle jo uper object.freeze use kiya hai usko remove krna pdega ... tabhi change kr skte hai....
jsUser.greetingFunction = function(){
    console.log("Hello, JsUser");
}
console.log(jsUser.greetingFunction); // [Function (anonymous)] // function execute nhi hua hai sirf reference aaya hai....
console.log(jsUser.greetingFunction()); // Hello, JsUser


// +++++++++++++++++++++MORE+++++++++++++++++++++
jsUser.greetingFunctionSecond = function(){
    console.log(`Hello, JsUser ${this.name}`);   
}

console.log((jsUser.greetingFunctionSecond())); // hello, JsUser AlphaFury