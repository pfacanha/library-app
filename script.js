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
const box = document.querySelector(".display");

// actions
add.addEventListener("click", function () {
  const form = document.createElement("form");

  // labels
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title: ";
  const authorLabel = document.createElement("label");
  authorLabel.textContent = "Author: ";

  // inputs
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  const authorInput = document.createElement("input");
  authorInput.type = "text";

  // links
  titleLabel.setAttribute("for", titleInput);
  titleLabel.setAttribute("for", authorInput);
  form.append(titleLabel, authorLabel, titleInput, authorInput);
  box.appendChild(form);
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
