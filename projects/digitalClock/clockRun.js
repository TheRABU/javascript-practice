const clock = document.getElementById("clock");
//setInterval will update the selected dom...1000 = 1 mili second
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
