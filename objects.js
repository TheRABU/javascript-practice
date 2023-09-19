//singleton
//Object.create constructor method,singleton uses

//object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Rabu",
  full_name: "Fazle Rabbi",
  [mySym]: "myKey1", //because of this is a Symbol it is in []
  age: 24,
  location: "Dhaka",
  email: "jbi@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
// console.log(JsUser.email);
// console.log(JsUser.full_name);
// console.log(JsUser[("email", "lastLoginDays")]);
// console.log(JsUser[mySym]);

JsUser.email = "sanga@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "sanga@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello there");
};
JsUser.greetingTwo = function () {
  console.log(`Hello there, ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
