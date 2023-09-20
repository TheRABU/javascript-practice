function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(20, 500, 600, 40000));

// in this way this is giving me the items to be calculated in a array...and then we can loop through the array and add/sub the price.

// HOW TO PASS OBJECT IN A FUNCTION
const user = {
  username: "rabu@34",
  price: 1440,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

//for printing the function or calling the function there's these methods
// handleObject(user);
handleObject({
  username: "janina",
  price: 455,
});

// HOW TO PASS ARRAY IN A FUNCTION
const myNewArray = [200, 400, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500, 600, 1500]));
