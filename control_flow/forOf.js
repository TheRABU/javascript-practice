//forOf loop for array
//forin loop for object

let myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObj) {
  //   console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  if (Object.hasOwnProperty.call(programming, key)) {
    const element = programming[key];
    // console.log(element);
  }
}

//MAP can't be iterated so loop doesn't work like this

// const map = new Map();
// map.set("In", "India");
// map.set("Bn", "Bangladesh");
// map.set("Pk", "Pakistan");
// map.set("US", "United States of America");

// for (const key in map) {
//   console.log(key);
// }
