let a = 300; //this is global scope

if (true) {
  let a = 50;
  let b = 100;
  console.log("Inner block value of A:", a);
}

console.log(a);

//INTERVIEW QUESTION FROM SCOPE:
// scope checking is different in terminal node and windows

//NESTED SCOPE
function one() {
  const username = "Rabbi";

  function two() {
    const websites = "youtube.com";
    console.log(username);
  }
  //   console.log(websites);
  two();
}

one();
