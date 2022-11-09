"use strict";
console.log("callBackWithPromise.js");

function getPost1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("post1");
      // cia as noriu kviesti post2
      resolve();
    }, 3000);
  });
}
function getPost2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("post2");

      resolve();
    }, 2000);
  });
}

function getPost3() {
  // throw new Error('klaida rasant'); // bus pagauta catch
  setTimeout(() => {
    console.log("post3");
  }, 1800);
}

// callback way
// getPost1(getPost2);
// getPost2();
// getPost3();

// promise Way
getPost1()
  .then(() => getPost2())
  .then(() => getPost3())
  .catch((err) => console.warn("klaida kazkur get post", err));
