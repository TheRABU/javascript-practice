const user = {
  username: "raheen69",
  price: 1245,

  welcomeMessage: function () {
    console.log(`${this.username}, Hello welcome to our website`);
  },
};
// user.username = "Shaheen Shah";
// user.welcomeMessage();
// console.log(this);

//Can't use this in a function like this:
// function chai() {
//   let username = "onium";
//   console.log(this.username);
// }
// chai();

const addTwoNum = (num1, num2) => {
  return num1 + num2;
};
//same thing in a different way..IMPLECIT RETURN
const addTwoNum2 = (num1, num2) => num1 + num2; // in a () no need to use return but in a curly braces {} return lagbe

//if we want to return a object in arrow function we have to wrap it in a ()
const addTwoNum3 = (num1, num2) => ({ username: "arabs" });
console.log(addTwoNum(4, 6));
