function Book(title, author) {
  const id = Math.floor(Math.random() * 1000) + 1;
  this.id = id;
  this.title = title;
  this.author = author;
}
const myLibrary = []; // array that will store books
const addButton = document.querySelector(".add-button");
const div = document.querySelector(".div");
const tableContainer = document.querySelector(".table-container");

addButton.addEventListener("click", function (e) {
  const existingForm = document.querySelector(".book-form");

  if (existingForm) {
    existingForm.remove();
    addButton.textContent = "Add Book";
    return;
  }
  div.textContent = "";

  const innerForm = document.createElement("form");
  innerForm.method = "POST";

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

  innerForm.appendChild(titleLabel);
  innerForm.appendChild(titleInput);
  innerForm.appendChild(authorLabel);
  innerForm.appendChild(authorInput);
  innerForm.appendChild(submitButton);

  innerForm.classList.add("book-form");
  innerForm.style.marginBottom = "10px";
  titleLabel.classList.add("book-label");
  titleInput.classList.add("book-input");
  authorLabel.classList.add("book-label");
  authorInput.classList.add("book-input");
  submitButton.classList.add("book-submit");

  addButton.textContent = "Return to Main";
  div.append(innerForm);

  innerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const currentTitle = titleInput.value.trim();
    const currentAuthor = authorInput.value.trim();

    addBookToLibrary(currentTitle, currentAuthor);

    innerForm.reset();
    displayBooks(myLibrary, tableContainer);
  });
});

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
