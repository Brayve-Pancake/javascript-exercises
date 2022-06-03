  // playerFactory Factory Function creates a player object which has one property (symbol), defined when a Player is created
const playerFactory = (symbol) => {
    const sayPlayerSymbol = () => console.log(`Player selected ${symbol}`);
    return {symbol, sayPlayerSymbol};
};

const displayBoard = (symbol) => {

  // on run, have the gameboard add all event listeners
  // for each valid card add event listner
  // have that listener add the player's symbol
  // remove the event listener from the card
  
  // Allow each cell to be clicked once
  let display = document.querySelector(".display");
  display.innerHTML = "";
  let para = document.createElement("p");
  para.innerHTML = `Player ${symbol}, make your move`
  display.append(para);
};
  
let Game = (round, player) => {
  let currentPlayer;
  let playerOne = playerFactory("O");
  let playerTwo = playerFactory("X");

  if (round == 0) {
    let randomNumberGen = Math.round(Math.random());
    currentPlayer = randomNumberGen == 0? playerOne: playerTwo;
    displayBoard(currentPlayer.symbol);
    return{currentPlayer};
  }

  // for all following games:
  // change player's turn
  currentPlayer = player == playerOne? playerTwo: playerOne;



  return{currentPlayer};
};





const Gameboard = (() => {
  const gameboard = Array(9).fill("");
  let round = 0;
  let currentPlayer;

  results = Game(round, currentPlayer);
  const playerSymbol = results.currentPlayer.symbol;

  const card = document.querySelectorAll(".card");
  card.forEach((x) => {x.addEventListener("click", placeCounter)});
  // Cannot be arrow because I need to removeEventListener
  function placeCounter() {
    const ticTac = document.createElement("p");
    ticTac.innerHTML = playerSymbol;
    this.append(ticTac);
    this.removeEventListener("click", placeCounter);
    round++;
    // console.log(round);
    // console.log(playerSymbol);
    displayBoard(playerSymbol);
  }


  return { playerSymbol,  }

})();

