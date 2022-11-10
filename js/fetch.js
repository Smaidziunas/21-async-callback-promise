"use strict";
console.log("fetch.js");

const usersListEl = document.getElementById("users");

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

// /*
fetch(url)
  .then((response) => response.json()) //.json() = JSON.parse();
  .then((dataInJsFormat) => {
    // gavau duomenis
    console.log("dataInJsFormat ===", dataInJsFormat);
    generateUsersList(dataInJsFormat);
  })
  .catch((err) => console.warn("klaida gaunant users", err));
// */

// 1. is gautu duomenu atvaizduoti sarasa su vardais ir tel. numeriais

/* sukuriant variable

let newObj = [];

fetch(url)
  .then((response) => response.json())
  .then((listTelName) => {
    // console.log("listTelName ===", listTelName);
    listTelName.map((card) => {
      newObj.push({ name: card.name, phone: card.phone });
    });
  });

console.log(newObj);
*/

/* sukuriant atskira funkcija ir ja idedant i fetch
fetch(url)
  .then((response) => response.json()) //.json() = JSON.parse();
  .then((dataInJsFormat) => {
    // gavau duomenis
    console.log("dataInJsFormat ===", dataInJsFormat);

    // iskelti saraso generavimo logika i atskira funkcija generateUsersList()
    dataInJsFormat.forEach((uObj) => {
      // uObj === {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
      const oneEl = makeOneLi(uObj.name, uObj.phone);
      usersListEl.append(oneEl);
    });
  })
  .catch((err) => console.warn("klaida gaunant users", err));

function makeOneLi(name, tel) {
  const liEl = document.createElement("li");
  liEl.textContent = `Name: ${name}, tel: ${tel}`;
  return liEl;
}
*/

// 2. iskelti saraso generavimo logika i atskira funkcija generateUsersList()

function makeOneLi(name, tel) {
  const liEl = document.createElement("li");
  liEl.textContent = `Name: ${name}, tel: ${tel}`;
  return liEl;
}

function generateUsersList(arr) {
  arr.forEach((uObj) => {
    // uObj === {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
    const oneEl = makeOneLi(uObj.name, uObj.phone);
    usersListEl.append(oneEl);
  });
}
