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
addBookToLibrary("Harry Potter II", "J.K. Rowling", false);
addBookToLibrary("Lord of The Rings", "J.R.R Tolkien", false);

function displayBooks() {
  for (let i = 0; i < myLibrary.length; ++i) {
    let curr = myLibrary[i];
    const currBook = document.createElement("div");

    const author = document.createElement("p");
    author.textContent = `Author: ${curr.author}`;

    const title = document.createElement("p");
    title.textContent = `Title: ${curr.title}`;

    const isRead = document.createElement("p");
    isRead.textContent = `isRead: ${curr.isRead}`;

    const line = document.createElement("p");
    line.textContent = `-----------------`;

    currBook.append(author, title, isRead);
    viewBooks.append(currBook, line);
  }
}

displayBooks();
