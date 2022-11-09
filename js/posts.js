"use strict";
console.log("posts.js");

const posts = [
  { title: "Post One", body: "This is post One body" },

  { title: "Post Two", body: "This is post Two body" },
];

// nusitaikom
const postsListEl = document.getElementById("posts");

// gauti postus imituojam, kad trunka 2s juos gauti

function getPosts() {
  //imituojam ilegesni siuntima (2s)
  setTimeout(() => {
    // sugeneruoti ir patalpinti posts masyvo elementus
    posts.forEach((pObj) => {
      const liEl = document.createElement("li");
      liEl.textContent = `${pObj.title} -${pObj.body}`;
      postsListEl.append(liEl);
    });
  }, 1000);
}

// create post funkcija, kuri ideda nauja posta i post masyva
function createPost(newPostObj, cb) {
  setTimeout(() => {
    posts.push(newPostObj);
    // 1 variantas: iskviesti getPosts tik po to kai sukurem posta su createPost su pavadinimu
    // getPosts();
    // 2 variantas: iskviesti getPosts tik po to kai sukurem posta su createPost su pavadinimu
    cb();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post Two body" }, getPosts);

// getPosts();

// 1 variantas: iskviesti getPosts tik po to kai sukurem posta su createPost su pavadinimu

// 2 variantas: iskviesti getPosts tik po to kai sukurem posta su createPost su pavadinimu
