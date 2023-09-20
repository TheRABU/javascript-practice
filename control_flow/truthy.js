//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// let userEmail = [];
// //to check if we have an empty array.
// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }
//to check EMPTY OBJECT
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty as well sir");
}

//Nullish coelsecing ??

let val1;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

//Terniary operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
