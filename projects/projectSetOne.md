# Projects related to DOM

## Project Link

[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution Code

## Project1

```Javascript
    // things to change Body , buttons
// for body document.querySelector('body')
// for button document.querySelectorAll('button')

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
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

```

## Project 2

```javascript
// select input field, button BUT There's FORM so we have to select form
// addEventListener on click even
// onclick button => execute function to calculate
// if we select the height first without form then it will store an empty value.
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result on screen
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
