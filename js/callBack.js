"use strict";
console.log("callBack.js");

function getPost1(anyFunNameIsCallBack) {
  setTimeout(() => {
    console.log("post1");
    // kvieciam post2
    anyFunNameIsCallBack();
  }, 3000);
}
function getPost2() {
  setTimeout(() => {
    console.log("post2");
  }, 2000);
}
function getPost3() {
  setTimeout(() => {
    console.log("post3");
  }, 1800);
}

//callback way
getPost1(getPost2);
// getPost2();
// getPost3();

function makeNum(cb) {
  const rez = cb(5);
  return rez;
}

function double(num) {
  return num * 2;
}

const n1 = makeNum(double);
double(n1);
