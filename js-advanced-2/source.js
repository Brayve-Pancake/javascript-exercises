const Gameboard = (() => {
  const gameboard = [];

  // Allow each cell to be clicked once
  const card = document.querySelectorAll(".card");
  card.forEach((x) => {x.addEventListener("click", placeCounter)});
  // Cannot be arrow because I need to removeEventListener
  function placeCounter() {
    const ticTac = document.createElement("p");
    ticTac.innerHTML = "O";
    this.append(ticTac);
    this.removeEventListener("click", placeCounter);
  }

})();



const Players = () => {
  // when player clicks cell, record the play in gameboard
  //

}

// const NewGame = (player) => {

// }

// in  a game, each player takes a turn to select a cell
// if it is playerOne's turn, then change the Tic to Tac
// each player can placeCounter