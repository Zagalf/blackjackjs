let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cartasEl = document.getElementById("cartas-el");


let player = {
  Name: "Per",
  Chips: 145
};

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips

function gerarNumeroAleatorio() {
  let randomNumber = Math.floor(Math.random() * 11) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  cards = []; // Limpa o array global de cartas
  sum = 0; // Reinicia a soma global

  let card1 = gerarNumeroAleatorio();
  let card2 = gerarNumeroAleatorio();
  cards = [card1, card2];
  sum = card1 + card2;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Soma: " + sum;
  cartasEl.textContent = "Cartas: ";
  for (let i = 0; i < cards.length; i++) {
    cartasEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack, sir!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game, sir";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function drawCard() {
  if(isAlive===true && hasBlackjack === false){
  let card = gerarNumeroAleatorio();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
  }
}
