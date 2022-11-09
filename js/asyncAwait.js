"use strict";
console.log("asyncAwait.js");

function getPost1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // idedam reject kad gautume klaida
      // reject();
      console.log("post1");
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

// async ir await - galim naudoti funkcijose, ir turim butinai naudoti su try catch bloku

async function app() {
  try {
    // await - palaukti kol vyks promise.resolve ir tik tada vykdyti tolimesne eilute
    const p1Rez = await getPost1();
    const p2Rez = await getPost2();
    const p3Rez = await getPost3();

    console.log("p1Rez ===", p1Rez);
    console.log("p2Rez ===", p2Rez);
    console.log("p3Rez ===", p3Rez);

    const avg = (p1Rez + p2Rez + p3Rez) / 3;
    console.log("avg ===", avg);
  } catch (error) {
    // klaidu gaudymo blokas
    console.warn(error, "kazkas negerai");
  }
}

app();

// try {
//   // testini bloka
//   console.log("po klaidos");
//   throw "boom";
// } catch (error) {
//   // klaidu gaudymo blokas
//   console.warn(error, "kazkas negerai");
// }
