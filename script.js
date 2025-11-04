function Book(title, author) {
  const id = crypto.randomUUID();
  this.id = id;
  this.title = title;
  this.author = author;
}
const myLibrary = []; // array that will store books
const addBook = document.querySelector(".add-book");
const form = document.querySelector(".form");

addBook.addEventListener("click", function () {
  const existingForm = document.querySelector(".book-form");

  if (existingForm) {
    existingForm.remove();
    addBook.textContent = "Add Book";
    return;
  }
  form.textContent = "";

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
  authorInput.id = "author";
  authorInput.name = "author";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  newForm.appendChild(titleLabel);
  newForm.appendChild(titleInput);
  newForm.appendChild(authorLabel);
  newForm.appendChild(authorInput);
  newForm.appendChild(submitButton);

  newForm.classList.add("book-form");
  titleLabel.classList.add("book-label");
  titleInput.classList.add("book-input");
  authorLabel.classList.add("book-label");
  authorInput.classList.add("book-input");
  submitButton.classList.add("book-submit");

  addBook.textContent = "Return to Main";
  form.append(newForm);

  // Continue on November 4, 2025
  // TODO: Get inputs and send it to the addBookToLibrary()
  form.addEventListener("submit", function () {
    // e.preventDefault();
  });
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
