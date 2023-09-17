// assigning variables to javascript...

let userName = "Amit Kumar shah";
let birthDate = "20/1/1899";
let age = 25;
const nationality = "Uganda";
// let nationality = "Indian"; not possible
/* 
    prefer not to use var because of issue with block scope and functional scope
*/
console.log(
  userName +
    " is " +
    age +
    " Years old. " +
    " Who's date-of-birth is: " +
    birthDate +
    " and he/she is from " +
    nationality
);
console.table([userName, age, birthDate, nationality]);
