let myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let infoString;
    console.log(read);
    if(read) {
      console.log("yay");
      infoString = `${title} by ${author}, ${pages} pages, read!`;
    } else {
        infoString = `${title} by ${author}, ${pages} pages, not read yet.`;
      }
    return infoString;
  }
}

function addABookToLibrary(book) {
    // create a card for each book
    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = myLibrary.length -1;

    let para = document.createElement("p");
    para.innerHTML = book.info();

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "DELETE";
    delBtn.id = "delBtn";
    delBtn.addEventListener("click", removeCard);

    let readBtn = document.createElement("button");
    readBtn.innerHTML = "Toggle read";
    readBtn.id = "readBtn";
    readBtn.addEventListener("click", toggleRead);

    card.append(para);
    card.append(delBtn);
    card.append(readBtn);
    document.querySelector(".container").append(card);
}

function toggleRead(event) {
  let index = event.target.parentElement.dataset.index;
  let book = myLibrary[index];
  console.log(book.read);
  book.read = !book.read;
  console.log(book.read);
}

function removeCard(event) {
  // get the card's data-index value
  let index = event.target.parentElement.dataset.index;
  // remove the card from display
  let container = document.querySelector(`[data-index="${index}"]`);
  container.remove();
  // remove book from library using dataset value, which is set to it's index
  myLibrary[index] = {};    
};



const newbookbtn = document.getElementById("newBook");
newbookbtn.addEventListener("click", () => {
  const form = document.getElementById('form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

// const delBtn = document.getElementById("delBtn");
// delBtn.addEventListener("click", () => {
//   // remove the card from display
//   // document.querySelector("[data-index='0']").style.display = none;
  
//   // remove book from library using dataset value, which is set to it's index
// });


const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submitNewBook);

function submitNewBook(event) {
  event.preventDefault(); // stops btn click submission
  // get relevant info
  let title = document.getElementById("title").value
  let author = document.getElementById("author").value
  let numberOfPages = document.getElementById("number-of-pages").value
  console.log(document.getElementById("read").checked)
  let read = document.getElementById("read").checked;
  console.log(`2` + read);
  // combine into object
  let book = new Book(title, author, numberOfPages, read)
  myLibrary.push(book);
  console.log(book);
  document.forms[0].reset();
  addABookToLibrary(book);
}