function Book(title, author) {
  const id = crypto.randomUUID();
  this.id = id;
  this.title = title;
  this.author = author;
}
const myLibrary = []; // array that will store books
const addBook = document.querySelector(".add-book");
const myForm = document.querySelector(".my-form");

addBook.addEventListener("click", function () {
  myForm.textContent = "";

  const newForm = document.createElement("form");
  newForm.method = "POST";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "Author:";
  const authorInput = document.createElement("input");
  authorInput.type = "text";
  authorInput.id = "title";
  authorInput.name = "title";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  newForm.appendChild(title);
  newForm.appendChild(author);
  newForm.appendChild(titleInput);
  newForm.appendChild(submitButton);

  myForm.append(newForm);
});
// const tableContainer = document.querySelector(".table-container");

function addBookToLibrary(title, author) {
  const newBook = new Book(title, author);
  myLibrary.push(newBook);
}

function displayBooks(arr, table) {
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

  arr.forEach((book) => {
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

// displayBooks(myLibrary, tableContainer);
