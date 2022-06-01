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

// TEMPORARY INITIALISED BOOKS FOR TESTING
// const booka = new Book("a", "b", 4, "read");
// const bookb = new Book("b", "c", 87, "read");
// myLibrary.push(booka);
// myLibrary.push(bookb);
// console.log(myLibrary);
// function addBookToLibrary() {
//   for(let i = 0; i < myLibrary.length; i++) {
//     // for each book in library, collate info
//     let book = myLibrary[i];
//     addABookToLibrary(book);
//   }
// }
// addBookToLibrary();


function addABookToLibrary(book) {
  let txt = "";
    for (let property in book) {
      if (property != "info") {
        txt += book[property] + " ";
      }
    };
    
    // create a card for each book
    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = myLibrary.length -1;

    let para = document.createElement("p");
    para.innerHTML = txt;
    
    let delBtn = document.createElement("button");
    delBtn.id = "delBtn";

    card.append(para);
    card.append(delBtn);
    document.querySelector(".container").append(card);

    
    console.log(myLibrary.length);
}



const newbookbtn = document.getElementById("newBook");
newbookbtn.addEventListener("click", addNewBook);

function addNewBook() {
  const form = document.getElementById('form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}


const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submitNewBook);

function submitNewBook(event) {
  event.preventDefault(); // stops btn click submission
  let title = document.getElementById("title").value
  let author = document.getElementById("author").value
  let numberOfPages = document.getElementById("number-of-pages").value
  let read = document.getElementById("read").value
  let book = new Book(title, author, numberOfPages, read)
  myLibrary.push(book);
  document.forms[0].reset();
  console.warn('added' , {myLibrary} );
  addABookToLibrary(book);
}


//   let movies = [];
//         // example {id:1592304983049, title: 'Deadpool', year: 2015}
//         const addMovie = (ev)=>{
//             ev.preventDefault();  //to stop the form submitting
//             let movie = {
//                 id: Date.now(),
//                 title: document.getElementById('title').value,
//                 year: document.getElementById('yr').value
//             }
//             movies.push(movie);
//             document.forms[0].reset(); // to clear the form for the next entries
//             //document.querySelector('form').reset();

//             //for display purposes only
//             console.warn('added' , {movies} );
//             let pre = document.querySelector('#msg pre');
//             pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

//             //saving to localStorage
//             localStorage.setItem('MyMovieList', JSON.stringify(movies) );
//         }
//         document.addEventListener('DOMContentLoaded', ()=>{
//             document.getElementById('btn').addEventListener('click', addMovie);
//         });

// }
