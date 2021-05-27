var btnNewgame = document.getElementById("newgameBtn")
var btnRoll = document.getElementById("rollBtn")
var btnQuit = document.getElementById("quitBtn")

var diceImage = document.getElementById("dice")
var playerScore = document.getElementById("scoreExa")

var totalScore = 0;


/* function that:
    generates a random number between 1 and 6
    shuffles the Dice Pictures
    returns the number generated
*/
function RollIMg() {
    var totalScore = 0;
    a = Math.floor((Math.random() * 6)) + 1
    diceImage.setAttribute("src", `/static/images/dice-${a}.png`)
    return a;
}


/* function that:
    reloads the page when clicked on the button new game
*/

function newGame() {
    location.reload();
}

/* function that:
    takes you back to the registration form
*/
function quitGame() {
    location.replace("/");
}


btnRoll.addEventListener("click", () => {
    RollIMg();
    totalScore += a;
    playerScore.innerHTML = `<h4>${totalScore }🔥</h4>`
    if (a == 1) {
        playerScore.innerHTML += " 👍 <br> GAME OVER BUT YOU DID GOOD <br> click on new game to begin a new round"
        btnRoll.setAttribute("disabled", "")
    }
});


btnNewgame.addEventListener("click", newGame)
btnQuit.addEventListener("click", quitGame)