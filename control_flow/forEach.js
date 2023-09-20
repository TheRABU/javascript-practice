const movies = ["Spiderman", "Batman", "IronMan", "EndGame"];

// movies.forEach(function (val) {
//   console.log(val);
// });

movies.forEach((item) => {
  //   console.log(item);
});

// function printMe(item) {
//   console.log(item);
// }
// movies.forEach(printMe);

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "typescript",
    languageFileName: "ts",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
