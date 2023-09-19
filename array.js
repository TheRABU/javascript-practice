//array
const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr[3]);

//Array methods

//myArr.push()
//myArr.pop()
//myArr.unshift() //adds a value on start of an array
//myArr.shift() //deletes a value from last index of array
myArr.push(6);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(7));

const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);
