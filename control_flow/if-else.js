// if

const balance = 1000;

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 700) {
  console.log("less than 700");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard) {
  console.log("Allow to buy courses");
}
if (loggedInFromEmail || loggedInFromEmail) {
  console.log("Allow to buy courses");
}
