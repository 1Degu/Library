let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = author;
  this.author = marker;
  this.pages = pages;
  this.readStatus = readstatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  let newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
}

