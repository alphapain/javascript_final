// kis trh se data ko memory me rakha jata hai or access kiya jaata hai us bases pe data k two categaraization hai 1. primitive or 2. non-primitive

// 1. primitive >> call by value > means always a copy is send to change something in selected variable>>>>> String, Numbeer, null, undefined, Symbol (used for uniqueness), BigInt (used for large integers)

// 2. non-primitive >> call by reference > always reference is allocated in memory >>>>>> array, objects, functions

// Important :- JS is a dynamically typed language. Bcoz data type will automatically assigned at the time of compilation or code execution.

// example of symbol := symbol is always unique

let symbolID = Symbol('123')
let secondSymbolID = Symbol('123')

console.log(symbolID === secondSymbolID); // false

// = :- assign
// == :- equal to
// === :- euqal value and equal DT
// how to make bigInt :- any integer or float value k end me 'n' use ...... ex:- 4746883479n etc.

// array :- const arrayRandom = ["a", "b", "c"]
// object :- let objectRandom = {
                        //         key  :  value
                        //         name : "deep",
                        //         age : 22,
                        //      }
// anything in the curly braces is referred in object, it can be any DT like number,string,array,boolean,function, or an object also....                        

// how to treat function as a variable:-
const myFunction = function(){
    console.log('using function as a variable...');
    console.log(typeof myFunction); // return function :- but actually its a object function/ function object
    
}
myFunction() // function running

// how to find DT of any value :-  use typeof

/*
type of value          result

undefined              "undefined"
Null                   "object"
Boolean                "boolean"
Number                 "number"
BigInt                 "undefined"     
Symbol                  "symbol"
// all non-primitive DT always returns typeof - object*/