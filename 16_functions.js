function calculateCartPrice(num1) {
    return num1
}
console.log(calculateCartPrice(2)); // 2

// yaha arguments jyada pass kre hai lekin parameter ek hi pass hai to ek hi argument access hoga....
console.log(calculateCartPrice(2,100,200)); // 2


// jb parameter single given ho or arguments jyada pass krne hai to simply hm rest operator ka use krke access kr skte hai...
function priceCalculation(...inputValues){
    return inputValues
}
// rest operator i.e. ...parameterValue use krne k baad kitni bhi values pass kre arguments me vo array k through accessible hongi.....
console.log(priceCalculation(1,2,3,4,5,6,76,8)); // [1,2,3,4,5,6,76,8] 

// Important :- agr parameter me (val1,val2, ...number) aise pass ho to argument ki phli or dusri value ko val1,val2 me access krenge or baaki sbhi pending values ...number which is rest operator k through access hongi...
function multipleParameterWithRestOperator(value1,value2,...numberFinal) {
    // value1 = Parameter first
    // value2 = Parameter second
    // ...numberFinal = rest operator
    return numberFinal
}

console.log(multipleParameterWithRestOperator(1,2,100,200,300)); // [100,200,300]
// funtion me sirf numberFinal return hua hai jo ki rest operator hai , to starting ki do values ko chhod ke jo ki 1st or 2nd parameter me jayegi , baaki output aaya hai....

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// passing objects in functions...

// object creation :-
const randomObject = {
    userName : "DeepRajput",
    rNumber : 7
}

// creating function
function usingObjectInFunction(passingAnyObject) {
    console.log(`Username is ${passingAnyObject.userName} and registration no is ${passingAnyObject.rNumber}`);
}

// accessing 
usingObjectInFunction(randomObject) // Username is DeepRajput and registration no is 7

// object ko alg se na create krke function run time me bhi pass kr skte hai
usingObjectInFunction({
    userName : "AmanRajput"  // output :- Username is AmanRajput and registration no is undefined
})
// reason of undefined :- agr keys different hai ya missing hai to undefined aayegi.... isko typesafety ya if-else se check krke access kr skte hai...

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//passing arrays in functions


// creating array
const newArray = [11,22,33,44]

// creating function
function takingArrayInFunction(passingAnyArray){
    // return passingAnyArray[1] // 33
    return passingAnyArray
}

console.log(takingArrayInFunction(newArray)); // [11,22,33,44]

// indexing se required values bhi access kr sakte hai....
