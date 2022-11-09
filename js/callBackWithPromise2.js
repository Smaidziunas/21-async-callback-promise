"use strict";
console.log("callBackWithPromise2.js");

function getPost1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("post1");
      // cia as noriu kviesti post2
      resolve(10);
    }, 3000);
  });
}
function getPost2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("post2");

      resolve(20);
    }, 2000);
  });
}

function getPost3() {
  return new Promise((resolve, reject) => {
    // throw new Error('klaida rasant'); // bus pagauta catch
    setTimeout(() => {
      console.log("post3");

      resolve(15);
    }, 1800);
  });
}

// callback way
// getPost1(getPost2);
// getPost2();
// getPost3();

// promise Way
// getPost1()
//   .then(() => getPost2())
//   .then(() => getPost3())
//   .catch((err) => console.warn("klaida kazkur get post", err));

// Promise.All([pr1, pr2 ...]) budas kazka daryti kai bus ispresti visi promises

Promise.all([getPost1(1), getPost2(2), getPost3(3)]).then((values) => {
  console.log("values ===", values);
  const postValuesAvg =
    values.reduce((total, sk) => total + sk, 0) / values.length;
  console.log("postValuesAvg ===", postValuesAvg);
});
