const library = [];

const inventory = document.querySelector(".inventory");
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

function Book(title, author, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.isRead = isRead ? "read" : "not read yet";
}

function addBookToLibrary(title, author, isRead) {
  const book = new Book(title, author, isRead);
  library.push(book);
  return book;
}

btn.addEventListener("click", function () {
  const dialogBox = document.createElement("dialog");

  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.classList.add("card");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Book Title:";

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "Book Author:";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("placeholder", "Enter the title");

  const authorInput = document.createElement("input");
  authorInput.setAttribute("type", "text");
  authorInput.setAttribute("name", "author");
  authorInput.setAttribute("placeholder", "Enter the author");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Submit";

  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");

  titleDiv.append(titleLabel, titleInput);
  authorDiv.append(authorLabel, authorInput);

  form.append(titleDiv, authorDiv, submitBtn);

  dialogBox.append(form);
  box.appendChild(dialogBox);

  dialogBox.showModal();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;

    addBookToLibrary(title, author, false);
    renderInventory();

    dialogBox.close();
  });
});

function renderInventory() {
  inventory.textContent = "";

  for (let i = 0; i < library.length; ++i) {
    let currentBook = library[i];

    let card = document.createElement("div");
    card.dataset.id = i;
    card.classList.add("card");

    const title = document.createElement("p");
    title.textContent = currentBook.title;

    const author = document.createElement("p");
    author.textContent = currentBook.author;

    const read = document.createElement("p");
    read.textContent = currentBook.isRead;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn");

    deleteBtn.addEventListener("click", function () {
      const id = card.dataset.id;
      handleDelete(id);
      renderInventory();
    });

    card.append(title, author, read, deleteBtn);

    inventory.appendChild(card);
  }
}

function handleDelete(id) {
  library.splice(Number(id), 1);
}
