// stack memory used in primitive DT
// heap memory used in non-primitive DT

// in stack one will get copy of any variable etc
// in heap one will get reference of any variable etc

// ex of stack:-

let myName = 'Deep Rajput'
let anyName = myName

anyName = 'Aman Rajput'
console.log(myName);
console.log(anyName);

// ex of heap :-
let user1 = {
    mail: "123@gmail.com",
    upi : "rajput@123"
}
console.log(user1);

let user2 = user1
console.log(user2);

user2.mail = "321@gmail.com"
user2.upi = "deep@123"

console.log(user1);
console.log(user2);

