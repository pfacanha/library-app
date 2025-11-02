function Book(title, author) {
  const id = crypto.randomUUID();
  this.id = id;
  this.title = title;
  this.author = author;
}

const myLibrary = []; // initially set to zero in order to test options
const tableContainer = document.querySelector(".table-container");

addBookToLibrary("Harry Potter - Phylosophal Stone", "J.K Rowling");
addBookToLibrary("Harry Potter - Chamber Secret", "J.K Rowling");

function addBookToLibrary(title, author) {
  const newBook = new Book(title, author);
  myLibrary.push(newBook);
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
