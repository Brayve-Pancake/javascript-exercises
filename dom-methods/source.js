// identify where to make an addition
const container = document.querySelector("#container");

// create a new element and add attributes/content
const paragraph = document.createElement("p");
paragraph.classList.add("basic-text");
paragraph.textContent = "here is some basiccc";

container.append(paragraph);


// Create new header
const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";
// insert the header
const secondContainer = document.querySelector(".content");
secondContainer.append(header);

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.color = "black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.append(h1);

const paragraphTwo = document.createElement("p");
paragraphTwo.textContent = "ME TOO!";
div.append(paragraphTwo);

secondContainer.append(div);

const button = document.createElement("button");
button.textContent = "Wass-up";
button.id = "btnn";
secondContainer.append(button);

btnn.addEventListener("click",function(e) {
  console.log(6);
});

btn.addEventListener("click",function(e) {
  e.target.style.backgroundColor = "blue";
});