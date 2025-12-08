const myLibrary = [];

function Book(title, author) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  const book = new Book(title, author);
  myLibrary.push(book);
  return book;
}

addBookToLibrary("Harry Potter", "J.K. Rowling");

console.log(myLibrary);
console.log(Array.prototype);
console.log(Book.prototype);
