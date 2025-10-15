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

function displayBooks(array, list) {
  return array.forEach((listText) => {
    const listItem = document.createElement("li");

    listItem.textContent = listText;

    list.appendChild(listItem);
  });
}

const myList = document.querySelector(".book-list");

displayBooks(myLibrary, myList);
