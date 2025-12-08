const myLibrary = [];

function Book(title, author, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.isRead = isRead ? "read" : "not read yet";
}

function addBookToLibrary(title, author) {
  const book = new Book(title, author);
  myLibrary.push(book);
  return book;
}

addBookToLibrary("Harry Potter", "J.K. Rowling", false);

console.log(myLibrary);
console.log(Object.getPrototypeOf(myLibrary));
console.log(Book.prototype);
