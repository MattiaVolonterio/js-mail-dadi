const userDice = document.getElementById("user-dice");
const computerDice = document.getElementById("computer-dice");
const randomizeButton = document.getElementById("randomize-button");
const resetButton = document.getElementById("reset-button");
const winner = document.getElementById("winner");

randomizeButton.addEventListener("click", function () {
  const userDiceValue = Math.floor(Math.random() * 6 + 1);
  const computerDiceValue = Math.floor(Math.random() * 6 + 1);

  let winnerValue = "";

  if (userDiceValue > computerDiceValue) {
    winnerValue = "Utente";
  } else if (userDiceValue < computerDiceValue) {
    winnerValue = "Computer";
  } else {
    winnerValue = "Pareggio";
  }

  winner.innerText = `Il Vincitore è: ${winnerValue}`;
  userDice.innerHTML = `<i class="fs-1 bi bi-dice-${userDiceValue}"></i>`;
  computerDice.innerHTML = `<i class="fs-1 bi bi-dice-${computerDiceValue}-fill"></i>`;
});
