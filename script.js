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

  const paragraph = document.createElement("p");
  paragraph.textContent = "Hello World!";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", () => dialogBox.close());

  dialogBox.append(paragraph, closeBtn);
  dialogBox.classList.add("card");
  addBox.appendChild(dialogBox);

  dialogBox.showModal();
});

displayBooks();
