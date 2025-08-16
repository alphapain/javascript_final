const course = {
    courseName : "JS Complete",
    price : "9999",
    courseInstructorNameIs : "HiteshChaudhary",
    courseStudentNameIs : "DeepRajput"
}

// course.courseInstructor
 // aise hm values access krte hai, lekin age jyada baar ek hi value access krni hai to de-structure use kr skte hai, as such compulsory nhi hai, bs syntactical way hai.....

 // de-structure
// const{konsi value access krni hai} = kaha se value access krni hai
const {courseInstructorNameIs} = course
console.log(courseInstructorNameIs); // HiteshChaudhary

// agr jo value access krni hai uski length kaafi jyada hai to usko dusri value me assign krke bhi access kr skte hai......
const {courseStudentNameIs : student} = course 
// assign the  value of courseStudentNameIs in student......
// ab hme sirf student ka use krna hoga usko access krne k liye...
console.log(student); // DeepRajput


// ++++++++++++++++++++++JSON++++++++++++++++++++++++ > an object without any name , but all keysand values should be in the string format....

// {
//     "courseName" : "JS Complete",
//     "price" : "9999",
//     "courseInstructorNameIs" : "HiteshChaudhary",
//     "courseStudentNameIs ": "DeepRajput"
// }