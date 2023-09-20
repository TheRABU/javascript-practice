// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums2 = myNums.map((item) => {
//   return item + 10;
// });

// console.log(newNums2);

// chaining

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
