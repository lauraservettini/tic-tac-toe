function startNewGame() {
  //si apre solo se sono settati tutti e due i player, cioè se i players.name sono validi
  for (let i = 0; i < 2; i++) {
    if (players[i].name === "") {
      alert("Please enter all player's names!");
      return;
    }
  }
  //rendere visibile game section
  gameSectionElement.style.display = "block";
  
  playerActive = 1;
  countTabs = 1;
  for (let i = 0; i < 9; i++) {
    
    //cancella class "selected"
    tabsGameElement[i].classList.remove("selected");

    //cancella textContent di #game-section ol li
    tabsGameElement[i].textContent = "";
  }
  gameOver = false;
  // scrivere it's your turn + nome player "n" su #gameText
  gameTextElement.textContent =
    "It's your turn " + players[playerActive - 1].name;
}

function switchPlayer() {
  // cambia il giocatore di turno
  if (playerActive === 2) {
    playerActive = 1;
    console.log(playerActive);
    countTabs++;
  } else if (playerActive === 1) {
    playerActive = 2;
    console.log(playerActive);
    countTabs++;
  }
  gameTextElement.textContent =
    "It's your turn " + players[playerActive - 1].name;
}

function selectTabs(event) {
  //non rende cliccabili le tab del gioco se clicchi fuori dagli elementi "li" e se game-over===true
  if (event.target.tagName !== "LI" || gameOver) {
    return;
  }
  const selectedField = event.target;
  console.log(event.target);
  console.dir(event.target);

  //verifica se "li" ha la class selected (in gameSectionElement), non é più cliccabile
  if (selectedField.className === "selected") {
    return;
  }

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  gameData[selectedColumn][selectedRow] = playerActive;
  selectedField.textContent = players[playerActive - 1].symbol;

  //aggiunge class selected a "li"
  selectedField.classList.add("selected");

  verifyEndGame();

  if(!gameOver) {
    switchPlayer();
  }
}

function closeGame() {
  gameOver = true;
  //reimposta i valori di gameData tutti a 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
    }
  }
  
  // su gameText cambia "You won + player name"
  if (playerActive === 1) {
    gameTextElement.innerHTML = "You won " + "<strong>" + players[playerActive - 1].name + "<strong>";
  } else if (playerActive === 2) {
    gameTextElement.innerHTML = "You won " + "<strong>" + players[playerActive - 1].name + "<strong>";
  } else {
    gameTextElement.textContent = "Game is over";
  }
}

function verifyEndGame() {
  for (let i = 0; i < 3; i++) {
    //verifica in row
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      closeGame();
    }
    //verifica in column
    else if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      closeGame();
    }
  }
  //verifica in diagonale
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    closeGame();
  } else if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    closeGame();
  }
  //verifica se finite 9 mosse
  if (countTabs === 9) {
    closeGame();
  }
  return;
}
