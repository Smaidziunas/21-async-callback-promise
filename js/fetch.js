"use strict";
console.log("fetch.js");

// norim is interneto parsisiusti duomenis ir su jais sugeneruoti postus
// fetch(url)
// .then((response) => response.json())

// let title = "NOT SET";
// fetch("https://jsonplaceholder.typicode.com/posts/2")
//   .then((response) => {
//     console.log("response===", response);
//     return response.json();
//   })
//   .then((data) => {
//     // turim duomenis is url po tiek laiko kiek truko parsisiuntimas
//     console.log(data);
//     // document.title = data.title;
//     title = data.title;
//     document.title = data.title;
//   })
//   .catch((err) => console.warn("klaida gaunant posts", err));

// document.title = title; // NOT SET

// parsisiusti 10 useriu is https://jsonplaceholder.typicode.com/posts/2
// iskonsiloginti;

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json()) //.json() = JSON.parse();
  .then((dataInJsFormat) => {
    // gavau duomenis
    console.log("dataInJsFormat ===", dataInJsFormat);
  })
  .catch((err) => console.warn("klaida gaunant users", err));

// is gautu duomenu atvaizduoti sarasa su vardais ir tel. numeriais
