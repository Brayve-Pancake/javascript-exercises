let myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let infoString;
    if(read) {
      infoString = `${title} by ${author}, ${pages} pages, not read yet`;
    } infoString = `${title} by ${author}, ${pages} pages, read`;
    console.log(infoString);
  }
}

const booka = new Book("a", "b", 4, "read");
const bookb = new Book("b", "c", 87, "read");

myLibrary.push(booka);
myLibrary.push(bookb);
console.log(myLibrary);


function addBookToLibrary() {
  for(let i = 0; i < myLibrary.length; i++) {

    // for each book in library, collate info
    let book = myLibrary[i];
    let txt = "";
    for (let property in book) {
      if (property != "info") {
        txt += book[property] + " ";
      }
    };
    
    // create a card for each book
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = txt;
    document.querySelector(".container").append(card);
  }
}

addBookToLibrary();