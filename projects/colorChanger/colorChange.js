// things to change Body , buttons
// for body document.querySelector('body')
// for button document.querySelectorAll('button')

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (event) {
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "black") {
      body.style.backgroundColor = event.target.id;
    }
    //same thing can be done with switch also
    // switch (event.target.id) {
    //   case "grey":
    //     body.style.backgroundColor = "grey";
    //     break;

    //   default:
    //     break;
    // }
  });
});
