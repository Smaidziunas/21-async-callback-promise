"use strict";
console.log("timeOutInterval.js");

const btn1El = document.getElementById("btn1");
const timeEl = document.getElementById("time");

btn1El.addEventListener("click", () => {
  console.log("paspaudei");
  // vykdo nurodyta funkcija po nurodyto laiko
  setTimeout(() => {
    console.log("paspaudei timeout");
  }, 2000);
});

function sayHi() {
  console.log("hello");
}

setTimeout(sayHi, 2000);

function tick() {
  const now = new Date();
  // timeEl.textContent = now.toLocaleTimeString();
  timeEl.textContent = now.toLocaleString("lt-LT", { timeStyle: "medium" });
}
tick();

// setInterval, vykdo nurodyta koda kas kazkiek laiko
const int1 = setInterval(tick, 1000);

// sustabdyti intervala su clearInterval
setTimeout(() => clearInterval(init), 5000);
clearInterval(int1);
