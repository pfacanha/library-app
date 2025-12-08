// Book collection
const myLibrary = [];

// Book class
class Book {
  constructor(title, author, isRead = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }

  markAsRead() {
    this.isRead = true;
  }

  markAsUnread() {
    this.isRead = false;
  }

  get status() {
    return this.isRead ? "read" : "not read yet";
  }
}

// Add book to library
function addBookToLibrary(title, author, isRead = false) {
  const book = new Book(title, author, isRead);
  myLibrary.push(book);
  return book;
}

// Example usage
addBookToLibrary("Harry Potter", "J.K. Rowling", false);

console.log(myLibrary);
console.log(Object.getPrototypeOf(myLibrary));
console.log(Book.prototype);
