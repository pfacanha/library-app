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
  titleInput.id = "title";
  const authorInput = document.createElement("input");
  authorInput.type = "text";
  authorInput.id = "author";

  // button
  const btn = document.createElement("button");
  btn.textContent = "Submit";
  btn.type = "submit";

  titleLabel.setAttribute("for", titleInput);
  authorLabel.setAttribute("for", authorInput);

  form.append(titleLabel, titleInput, authorLabel, authorInput, btn);
  box.appendChild(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const currentTitle = titleInput.value;
    const currentAuthor = authorInput.value;
    console.log(currentTitle);
    console.log(currentAuthor);
  });
});

function addBookToLibrary(title, author, isRead) {
  const newBook = new Book(title, author, isRead);
  myLibrary.push(newBook);
}
