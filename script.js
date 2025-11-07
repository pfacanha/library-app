function Book(title, author, isRead) {
  const id = Math.floor(Math.random() * 1000) + 1;
  this.id = id;
  this.title = title;
  this.author = author;
  this.isRead = isRead;
}
const myLibrary = ["hello", "world"];

// DOM elements
const add = document.querySelector(".add");
const display = document.querySelector(".display");

// actions
add.addEventListener("click", function () {
  const form = document.createElement("form");

  // labels
  const titleLabel = document.createElement("label");
  const authorLabel = document.createElement("label");

  // inputs
  const titleInputs = document.createElement("input");
  const authorInputs = document.createElement("input");
});

function addBookToLibrary(title, author, isRead) {
  const newBook = new Book(title, author, isRead);
  myLibrary.push(newBook);
}

// function displayBooks() {
//   myLibrary.forEach((book) => {
//     console.log(book);
//   });
// }
