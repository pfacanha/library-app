const myLibrary = [];
const inventory = document.querySelector(".inventory");
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const addBox = document.querySelector(".add-box");

function Book(title, author, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.isRead = isRead ? "read" : "not read yet";
}

function addBookToLibrary(title, author, isRead) {
  const book = new Book(title, author, isRead);
  myLibrary.push(book);
  return book;
}

addBookToLibrary("Harry Potter", "J.K. Rowling", false);
addBookToLibrary("Heart of Darkness", "Joseph Conrad", true);
addBookToLibrary("Lord of The Rings", "J.R.R Tolkien", false);

function displayBooks() {
  inventory.textContent = "";

  for (let i = 0; i < myLibrary.length; ++i) {
    let curr = myLibrary[i];
    const bookCard = document.createElement("div");

    const author = document.createElement("p");
    author.textContent = `Author: ${curr.author}`;

    const title = document.createElement("p");
    title.textContent = `Title: ${curr.title}`;

    const isRead = document.createElement("p");
    isRead.textContent = `isRead: ${curr.isRead}`;

    bookCard.classList.add("card");

    bookCard.append(author, title, isRead);
    inventory.appendChild(bookCard);
  }
}

addBtn.addEventListener("click", function () {
  const dialogBox = document.createElement("dialog");

  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.classList.add("card");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Book Title:";

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "Book Author:";

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("placeholder", "Enter the title");

  const author = document.createElement("input");
  author.setAttribute("type", "text");
  author.setAttribute("name", "author");
  author.setAttribute("placeholder", "Enter the author");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Submit";

  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");

  titleDiv.append(titleLabel, title);
  authorDiv.append(authorLabel, author);

  form.append(titleDiv, authorDiv, submitBtn);

  dialogBox.append(form);
  addBox.appendChild(dialogBox);

  dialogBox.showModal();
});

displayBooks();
