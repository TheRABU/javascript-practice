"use strict"; //treat all JS code as newer version
// alert(3+3) this works in browser not with nodejs

//number
//bigint
// string => ""
//boolean = true/false
//undefined =>
// symbol => unique

//object
//Now here's a trick part.. Null is an Object console.log(typeof null) >> object
//but console.log(typeof undefined) >> unique.

//these are just operators
let a = 2;
let b = 3;
let c = (a *= b); //multiplication
let d = (a **= c); //power

console.log(c);
console.log(d);
