const dice = document.getElementById("dice");


function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    dice.src = `img/${randomNumber}.png`;
}

dice.addEventListener("click", rollDice);
