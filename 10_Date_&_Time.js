const myDate = new Date()
console.log(myDate);

// using Date methods
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
// and so on u can use further methods to explore...
console.log(typeof myDate); // object

////// create your specific date :-
const myCreatedDate = new Date(2025,8,4) // year,month,date >>>> month indexing 0 se start hoti hai........
console.log(myCreatedDate.toDateString()); // Thu Sep 04 2025

const myCreatedDateToTime = new Date(2025,8,4,5,33) // year,month,data,hour,min
console.log(myCreatedDateToTime.toLocaleString()); // 9/4/2025, 5:33:00 AM

const randomDate = new Date("01-11-2025")
console.log(randomDate.toLocaleString());

const exactTimeStamp = Date.now() // return value in milliseconds <starting from 1 jan 1970 to now.....
console.log(exactTimeStamp); // let 1

// to compare two dates :- if we make two string in milliseconds , then we can easily compare them...
// let 2 
console.log(myCreatedDate.getTime()); 
// now both converted into milliseconds, so now u can easily compare them....in any required way.....

// NOTE - do comparison always in milliseconds

// converting a Date in seconds from milliseconds :-
console.log(Date.now()/1000); // >> it gives seconds but in float (Decimal) value

// to avoid floating > can use Math.floor or Math.round
console.log(Math.floor(Date.now()/1000)); // value will return in seconds...

// more Date methods to use :--
const newDate = new Date()
console.log(newDate.getMonth()); // starting from 0
console.log(newDate.getDay());  // starting from Monday
console.log(newDate.getDate());
// etc........


// one more imp method :- // customize your own formation of Date data
const customizeDate = newDate.toLocaleString('default',{
     // use ctrl space to access all properties
     weekday : "long"
     // can use more properties acc to your requirement...
})

console.log(customizeDate.toLocaleString()); // Friday 
