function setPlayerName(event) {
  configNameAreaElement.style.display = "block";
  backdropElement.style.display = "block";

  let activeArticleId = event.target.parentElement.id;

  if (activeArticleId === "player-1") {
    playerActive = 1;
  } else if (activeArticleId === "player-2") {
    playerActive = 2;
  }
}

function changePlayerName(event) {
  //previene azione predefinite form submit
  event.preventDefault();

  //verifica che i dati siano validi diversi da null
  const formData = new FormData(event.target);
  
  //object.get("name"); / trim() toglie i blanks/white spaces
  const enteredPlayername = formData.get("playername").trim(); 

  if (enteredPlayername) {
    //elemento "#config-name form p" display none in partenza
    if (playerActive === 1) {
      playerName1Element.textContent = enteredPlayername;
      players[playerActive-1].name = playerName1Element.textContent;
    } else if (playerActive === 2) {
      playerName2Element.textContent = enteredPlayername;
      players[playerActive-1].name = playerName2Element.textContent;
    }
  } else {
    //elemento "#config-name form p" display block e aggiunge class error
    parNameInvalidElement.style.display = "block";
    inputPlayerNameElement.classList.add("error");
    return;
  }

  closePlayerConfig();
  //cambia testo titolo h3 dell'articolo
}

function closePlayerConfig() {
  //elemento "#config-name form p" display none e toglie class error
  parNameInvalidElement.style.display = "none";
  inputPlayerNameElement.classList.remove("error");
  
  //chiude #config-name
  configNameAreaElement.style.display = "none";
  backdropElement.style.display = "none";
  inputPlayerNameElement.value = "";
}
