// Start the library
const myLibrary = [];

// Create constructor for all new books
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    // Create a msg to display
    let infoString = `${title} by ${author}, ${pages} pages, `;
    // Append based on "read" bool;
    infoString += this.read? "read!": "not read yet.";
    return infoString;
  }
}

function addBookToLibrary(book) {
    // create a card for each book
    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = myLibrary.length -1;

    let para = document.createElement("p");
    para.id = "pInfo";
    para.innerHTML = book.info();

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "DELETE";
    delBtn.addEventListener("click", removeCard);

    let readBtn = document.createElement("button");
    readBtn.innerHTML = "Toggle read";
    readBtn.addEventListener("click", toggleRead);

    card.append(para, delBtn, readBtn);

    // Append the card to the grid container
    document.querySelector(".container").append(card);
}

function toggleRead(event) {
  // Get dataset value of event listener
  let index = event.target.parentElement.dataset.index;
  // Change the "read" bool 
  let book = myLibrary[index];
  book.read = !book.read;
  // Identify the relevant card and refresh it's HTML
  let para = document.getElementById("pInfo");
  para.innerHTML = book.info();
}

function removeCard(event) {
  // Get dataset value of event listener
  let index = event.target.parentElement.dataset.index;
  let container = document.querySelector(`[data-index="${index}"]`);
  container.remove();
  // Remove/ Overwrite book to null
  myLibrary[index] = {};    
};


// ADD A NEW BOOK
const newBookBtn = document.getElementById("newBook");
newBookBtn.addEventListener("click", () => {
  // Display/hide "new book" form 
  const form = document.getElementById('form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submitNewBook);

function submitNewBook(event) {
  event.preventDefault(); // stops btn click submission
  // Get info from form
  let title = document.getElementById("title").value
  let author = document.getElementById("author").value
  let numberOfPages = document.getElementById("number-of-pages").value
  let read = document.getElementById("read").checked;
  // Use into create new book
  let book = new Book(title, author, numberOfPages, read)
  myLibrary.push(book);
  // Reset the form after submission
  document.forms[0].reset();
  addBookToLibrary(book);
}