function Book(title, author) {
  const id = crypto.randomUUID();
  this.id = id;
  this.title = title;
  this.author = author;
}
const book1 = new Book("Harry Potter", "J.K Rowling");
const book2 = new Book("Lord of The Rings", "J.R.R. Tolkien");
const book3 = new Book("Lord of The Rings II", "J.R.R. Tolkien");

const myLibrary = [book1, book2, book3];
const tableContainer = document.querySelector(".table-container");

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(array, table) {
  return array.forEach((book) => {
    const newRow = document.createElement("tr");
    const id = document.createElement("td");
    id.textContent = book.id;

    const movieTitle = document.createElement("td");
    movieTitle.textContent = book.title;

    const authorTitle = document.createElement("td");
    authorTitle.textContent = book.author;

    newRow.appendChild(id);
    newRow.appendChild(movieTitle);
    newRow.appendChild(authorTitle);

    table.appendChild(newRow);
  });
}

displayBooks(myLibrary, tableContainer);
