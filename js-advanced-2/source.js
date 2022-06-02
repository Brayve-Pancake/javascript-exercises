// const Gameboard = (() => {
//   const gameboard = [];
// })();



// const Players = (name, playerNumber) => {
//   const name = name;
//   const playerNumber = playerNumber;
// }

// const NewGame = (player) => {

// }

const card = document.querySelectorAll(".card");
card.forEach((x) => {x.addEventListener("click", placeCounter)});

function placeCounter() {
  console.log(this);
  let cardClicked = this;
  const ticTac = document.createElement("p");
  ticTac.innerHTML = "O";
  this.append(ticTac);
  this.removeEventListener("click", placeCounter);
}