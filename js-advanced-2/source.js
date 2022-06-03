// playerFactory Factory Function creates a player object which has one property (symbol), defined when a Player is created
const playerFactory = (symbol) => {
    return {symbol};
};

// Who's turn is it? Display to user.
const displayBoard = (symbol) => {
  let display = document.querySelector(".display");
  display.innerHTML = "";
  let para = document.createElement("p");
  para.innerHTML = `Player ${symbol}, make your move`
  display.append(para);
};

// The code that runs each time a cell is clicked
const Game = (round, _symbol) => {
  let symbol;
  let pOne = playerFactory("O");
  let pTwo = playerFactory("X");

  // Select random player for round 0
  if (round == 0) {
    let randomNumberGen = Math.round(Math.random());
    symbol = randomNumberGen == 0? pOne.symbol: pTwo.symbol;
    displayBoard(symbol);
    return{symbol};
  }
  // Change player each round
  symbol = _symbol == pOne.symbol? pTwo.symbol: pOne.symbol;
  return{symbol};
};

const Gameboard = (() => {
  const gameboard = Array(9).fill("");
  let round = 0;
  let currentPlayer;
  // could initialise pOne and pTwo here and link them back

  let results = Game(round, currentPlayer);
  let playerSymbol = results.symbol;
  console.log("playerSymbol: " + playerSymbol);

  const card = document.querySelectorAll(".card");
  card.forEach((x) => {x.addEventListener("click", placeCounter)});
  // Cannot be arrow because I need to removeEventListener
  function placeCounter() {
    // click run's next instance of game
    playerSymbol = Game(round, playerSymbol).symbol;

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

