let playerScore = 0;
let computerScore = 0;
const rounds = 5;

function playGame(rounds) {
  for (let round = 1; round <= rounds; round++) {
    let playerSelection = playerSelectionChoice();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  
  if (playerScore > computerScore) {
    alert("¡Felicidades! ¡Has ganado el juego!");
  } else if (playerScore < computerScore) {
    alert("¡La computadora ha ganado el juego!");
  } else {
    alert("¡El juego ha terminado en empate!");
  }
}

function playerSelectionChoice() {
  let opcion = prompt("Ingrese alguna opción: piedra, papel o tijera");
  return opcion.toLowerCase(); 
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection === "piedra" ||
    playerSelection === "papel" ||
    playerSelection === "tijera"
  ) {
    if (
      (playerSelection === "piedra" && computerSelection === "papel") ||
      (playerSelection === "papel" && computerSelection === "tijera") ||
      (playerSelection === "tijera" && computerSelection === "piedra")
    ) {
      alert("Perdiste esta ronda.");
      computerScore++; 
    } else if (playerSelection === computerSelection) {
      alert("Esta ronda ha terminado en empate.");
    } else {
      alert("¡Ganaste esta ronda!");
      playerScore++; 
    }
  } else {
    alert("Ingrese una opción válida: piedra, papel o tijera");
  }
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1; 
  switch (random) {
    case 1:
      return "piedra";
    case 2:
      return "papel";
    case 3:
      return "tijera";
  }
}

playGame(rounds);