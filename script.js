const myLibrary = [];
const viewBooks = document.querySelector(".view");

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
  viewBooks.textContent = "";

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
    viewBooks.append(bookCard);
  }
}

displayBooks();
