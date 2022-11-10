"use strict";
console.log("practice.js");

const url = "https://jsonplaceholder.typicode.com/posts";
const url2 = " https://dummyjson.com/posts";

fetch(url)
  .then((response) => response.json())
  .then((duomenysJavascriptFormatu) => {
    // console.log('duomenysJavascriptFormatu ===', duomenysJavascriptFormatu);
    const first10posts = duomenysJavascriptFormatu.slice(0, 10);
    console.log("first10posts ===", first10posts);
    generateCards(first10posts, "users");
  })
  .catch((err) => console.warn("klaida gaunant posts", err));

/*
  <article class="card">
      <h3>title</h3>
      <p>text</p>
      <p><i>id</i></p>
    </article>
  */
function generateCards(arr, elId) {
  const dest = document.getElementById(elId);
  if (!dest) throw "blogas id";

  const htmlElsArr = arr.map((p) => {
    const articleEl = document.createElement("article");
    articleEl.className = "card";
    articleEl.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.body}</p>
    <p><i>${p.id}</i></p>
    `;
    return articleEl;
  });
  console.log("htmlElsArr ===", htmlElsArr);
  htmlElsArr.forEach((el) => dest.append(el));
}

// 6. parsisiusti postus

fetch(url2)
  .then((respo) => respo.json())
  .then((data) => {
    console.log("data ===", data);
    console.log("data.posts ===", data.posts);
  })
  .catch((err) => {
    console.warn("klaida gaunant postus", err);
  });

// 8 parasyti funkcija kuria iskvietus su fetch

function getProducts() {
  const rezInside = fetch("https://dummyjson.com/products")
    .then((resp) => resp.json)
    .then((data) => {
      console.log("data ===", data);
    })
    .catch((err) => console.warn("klaida"));
  return rezInside; // vietoj const rezInside galima is karto rasyti return
}

const rez = getProducts(); // grizta promise
console.log(rez); // promise

// pasiimti rezultata is funkcijos kuri grazina promise
getProducts().then((data) => {
  console.log("data After Then", data);
});
