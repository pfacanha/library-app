function Book(title, author) {
  const id = Math.floor(Math.random() * 1000) + 1;
  this.id = id;
  this.title = title;
  this.author = author;
}
const myLibrary = [];

// DOM elements
const add = document.querySelector(".add");
const display = document.querySelector(".display");

// actions
add.addEventListener("click", function () {});
