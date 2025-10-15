const myLibrary = ["Harry Potter", "Lord of Rings", "Heart of Darkness"];

function Books(title, author) {
  const id = crypto.randomUUID();
  this.id = id;
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(array) {
  return array.forEach((book) => console.log(book));
}
