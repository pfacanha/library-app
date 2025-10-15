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
  table.textContent = "";

  // THEAD
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const thId = document.createElement("th");
  thId.textContent = "ID";
  const thTitle = document.createElement("th");
  thTitle.textContent = "Title";
  const thAuthor = document.createElement("th");
  thAuthor.textContent = "Author";

  headerRow.append(thId, thTitle, thAuthor);
  thead.appendChild(headerRow);

  // TBODY
  const tbody = document.createElement("tbody");

  array.forEach((book) => {
    const row = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = book.id;

    const tdTitle = document.createElement("td");
    tdTitle.textContent = book.title;

    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = book.author;

    row.append(tdId, tdTitle, tdAuthor);
    tbody.appendChild(row);
  });

  table.append(thead, tbody);
  return table;
}

displayBooks(myLibrary, tableContainer);
