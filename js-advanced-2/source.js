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

  // Play the game, player changes each time
  // click a cell and the event logs the recorded player's move
  // check if the player's new move has caused a win
  // if win, then display winner

  return{symbol};
};

const Gameboard = (() => {
  const gameboard = Array(9).fill("");
  let round = 0;
  let currentPlayer;
  let winner;
  // could initialise pOne and pTwo here and link them back

  let results = Game(round, currentPlayer);
  let playerSymbol = results.symbol;
  console.log("playerSymbol: " + playerSymbol);

  const cards = document.querySelectorAll(".card");
  cards.forEach((x) => {x.addEventListener("click", placeCounter)});
  // Cannot be arrow because I need to removeEventListener
  function placeCounter() {
    // click run's next instance of game
    playerSymbol = Game(round, playerSymbol).symbol;

    const selection = document.createElement("p");
    selection.innerHTML = playerSymbol;
    this.append(selection);
    this.removeEventListener("click", placeCounter);
    round++;
    // cards have id=card$$, use this to store card selection
    let index = this.id.slice(this.id.length - 1) - 1
    gameboard[index] = playerSymbol;
    displayBoard(playerSymbol);
    checkWinner(playerSymbol);
  }


  function checkWinner(playerSymbol) {
    winningArrays = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6],]
    winningArrays.forEach((subArray) => {
      // if any sub array has all matching elements on gameboard announce winner
      if (subArray.every((elIndex) => { return gameboard[elIndex] == playerSymbol;})) {
        winner = playerSymbol;
        cards.forEach((card) => {card.removeEventListener("click", placeCounter);});
        displayWinner(winner);
      };
    })
    if (!gameboard.includes("")) {
      displayWinner("Draw, no one");
    }
  }

  function displayWinner(winner) {
    let display = document.querySelector(".display");
    display.innerHTML = "";
    let para = document.createElement("p");
    para.innerHTML = `${winner} wins the game!`
    display.append(para);
  }

  return { playerSymbol,  }
})();

// Stage 5
// when a player selects a card, 
// record that on the gameboard using card id for index and store X or O
// create potential winning combos
// check if elements at winnin positions are O or X