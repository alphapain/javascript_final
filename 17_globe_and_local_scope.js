// {} >> scope 

// variable declaration 
var a   = 2 // globe scoping
let b   = 1 // local scoping
const c = 3 // local scoping

// we already know about scoping....

// nested scoping in functions

function one(){
    const userName = "DeepRajput"

    function two(){
        const course = "JS"
        console.log(userName); // accessing variable of parent function in child function...which is valid...
    }
    // console.log(course); // accessing variable of child function, outside the child function (inside in parent function) which is wrong and invalid...  >>> output course is not defined

    two() // executing two...
    
}

one() // executing one...
//after commenting the line 19 we get output >> DeepRajput
// if we don't execute the function two() then nothing will show as output.......

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// nesting functions in if-else

if(true){
    const degree = "M.C.A"
    if(degree === "M.C.A"){
        const fullForm = "Masters in Computer Application!"
        console.log(degree + fullForm);
    }
    // console.log(fullForm); // error, can't access outside the scope...
    
}

// console.log(degree); // error, can't access outside the scope...

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// More interesting
// basic concept of Hoisting:-



console.log(addOne(5)) // function declare krne se phle bhi kr skte hai , agr function normally declare hua hai
//output :- 6


// yaha normal function declaration kiya hai....
function addOne(num){
    return num + 1
}




console.log(two) // function ko variable me hold kiya hai to variable ko declaration se phle hold nhi kr skte ....
// ReferenceError: Cannot access 'two' before initialization

// yaha function ko declare krke ek variable me hold kiya hai , which is also called as expression...
const two = function addTwo(num){
    return num + 2
}


