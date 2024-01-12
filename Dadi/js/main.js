const userDice = document.getElementById("user-dice");
const computerDice = document.getElementById("computer-dice");
const randomizeButton = document.getElementById("randomize-button");
const resetButton = document.getElementById("reset-button");
const winner = document.getElementById("winner");

let userDiceValue;
let computerDiceValue;

randomizeButton.addEventListener("click", function () {
  const randomUserDiceValue = Math.floor(Math.random() * 6 + 1);
  const randomComputerDiceValue = Math.floor(Math.random() * 6 + 1);

  userDiceValue = `bi-dice-${randomUserDiceValue}`;
  computerDiceValue = `bi-dice-${randomComputerDiceValue}-fill`;

  let winnerValue = "";
  userDice.classList.replace(`bi-dice-1`, userDiceValue);
  computerDice.classList.replace(`bi-dice-1-fill`, computerDiceValue);

  if (userDiceValue > computerDiceValue) {
    winnerValue = "Utente";
  } else if (userDiceValue < computerDiceValue) {
    winnerValue = "Computer";
  } else {
    winnerValue = "Pareggio";
  }

  winner.innerText = `Il Vincitore è: ${winnerValue}`;

  randomizeButton.classList.replace("d-inline-block", "d-none");
  resetButton.classList.replace("d-none", "d-inline-block");
});

resetButton.addEventListener("click", function () {
  userDice.classList.replace(userDiceValue, `bi-dice-1`);
  computerDice.classList.replace(computerDiceValue, `bi-dice-1-fill`);
  randomizeButton.classList.replace("d-none", "d-inline-block");
  resetButton.classList.replace("d-inline-block", "d-none");

  winner.innerText = "Il Vincitore è:";
});
