// function functionName(parameters){
//     // function definition
// }

// functionName // it is called reference of function
// functionName(arguments) // function call 

// add two no:-
function addTwo(n,_n){
    console.log(n+_n);    
}
addTwo(1,2) // 3
addTwo(1,"2") // 12 // already string conversion me padha hai...

// we can store functions in a variale:-
const result = addTwo(1,2) // 3 >> function me console.log hua hai to normally print hoga , nothing else...
console.log(result); // kuch return nhi hua hai to result ki actual value undefined hi rhegi

// Note:- console.log and return both are different...
// agr return code me use krte hai to aise variable me define krte time uski value undefined nhi aygi...
// ex:-
function anotherSum (v1,v2){
    let final = v1+v2
    return final 

    // kisi variable me store kiye bina bhi return kr skte hai for ex:- return v1+v2

    // return use krne k baad koi vi statement execute nhi hogi...
    console.log("DeepRajput");
    
}

// return krne k baad console.log to kr hi skte hai , lekin saath-saath kisi variable me store krke access kr skte hai or use kr skte hai...
console.log(anotherSum(12,12));

const finally_ = anotherSum(11,11);  
console.log(finally_); 



// +++++++++++++++++=More=+++++++++++++++++
function randomUserLoggedIn(userName){
    return `${userName} was just logged in`
}
randomUserLoggedIn("DeepRajput") // it will not print with this......have to use console.log , bcoz function definition me sirf return kiya hai console.log nhi...

console.log(randomUserLoggedIn("DeepRajput")); // DeepRajput was just logged in >> 1
console.log(randomUserLoggedIn("")); // was just logged in >> empty string me output >> 2 
console.log(randomUserLoggedIn()); // undefined was just logged in >> empty string me output  >> 3

// agr 3 situation hai to basically hm :-
function differentCase(userName){
    if(userName === undefined){
            console.log('enter a valid name!');
            return 
            // agr username undefined hua to console execute hoga or then function return ho jayga to aage execute nhi hoga...
    }
    // agr username undefined nhi hai to ,,, code idhr wala execute hoga....
    return `${userName} was just logged in`
}
console.log(differentCase()); // enter a valid name!

// agr undefined wali situation nhi chahte to simply function define me username ki default value set kr skte hai...
// ex:- function differentCase(userName = "DeepRajput") // is case me jb bhi value function call me undefined aaygi to automatically DeepRajput execute hoga.....!

