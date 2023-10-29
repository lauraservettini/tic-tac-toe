let playerActiveId = 0;
let playerActive = 0;
let countTabs = 0;
let gameOver = false;
let players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  }
];

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

//other elements
const configNameAreaElement = document.getElementById("config-name");
const backdropElement = document.getElementById("backdrop");
const playerName1Element = document.querySelector("#player-1 h3");
const playerName2Element = document.querySelector("#player-2 h3");
const inputPlayerNameElement = document.getElementById("playername");
const parNameInvalidElement = document.getElementById("input-alert");
const formElement = document.querySelector("#config-name form");
const gameSectionElement = document.getElementById("game-section");
const tabsGameElement = document.querySelectorAll("#game-section li");
const gameTextElement = document.getElementById("gameText");

//buttons
const editPlayerName1ButtonElement =
  document.getElementById("edit-playername-1");
const editPlayerName2ButtonElement =
  document.getElementById("edit-playername-2");
const confirmPlayerNameButtonElement = document.getElementById("confirm-btn");
const startNewGameButtonElement = document.querySelector(
  "#start-btn-section button"
);

editPlayerName1ButtonElement.addEventListener("click", setPlayerName);
editPlayerName2ButtonElement.addEventListener("click", setPlayerName);

formElement.addEventListener("submit", changePlayerName);

startNewGameButtonElement.addEventListener("click", startNewGame);
gameSectionElement.addEventListener("click", selectTabs);
