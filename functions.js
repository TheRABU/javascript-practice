function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}

const final_result = addTwoNumbers(5, 5);
console.log("The final result is: ", final_result);

function isLoggedIn(username) {
  return `${username} just logged in`;
}

const userLogin = isLoggedIn("Rabu58");
console.log(userLogin);

// another method is :
// console.log(isLoggedIn("Rabu58"));
// INTERVIEW Question: if in this method some nothing passed then what will be the output?
// console.log(isLoggedIn()); this will return undefined not null.

function loginUserMessage(username) {
  // if(username === undefined){
  //     console.log("Please insert a username ");
  // }
  if (!username) {
    console.log("Please insert a username ");
    return;
  }
  return `${username} Hello there`;
}
console.log(loginUserMessage());

function loginUserMessage2(username = "at least someone") {
  // if(username === undefined){
  //     console.log("Please insert a username ");
  // }
  if (!username) {
    console.log("Please insert a username ");
    return;
  }
  return `${username} Hello there`;
}
console.log(loginUserMessage2());
