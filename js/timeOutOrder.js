"use strict";
console.log("timeOutOrder.js");

console.log("One");

function sayHi() {
  console.log("Two");
}

// asinchronine operacija visada vyks po to kai visas kodas yra nuskaitytas
setTimeout(sayHi, 0);
// sayHi();

console.log("Three");
