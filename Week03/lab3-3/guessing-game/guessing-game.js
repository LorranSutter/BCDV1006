/* Write a guess my number game: the game should be a function that creates a random number between 1 and 100. The user should have 10 tries to guess the number -- the number *does not* change until the user guesses it correctly, or the user has used up all their tries. After each guess, the function should tell the user if the guess was: correct, too high, or too low.
    - Extra challenge: create a webpage that the user can use to interact with the game. The page should display the previous guess should tell the user if they’ve won or lost, and should have a reset button to start the game over again. */

var button = document.querySelector("button");
// var input = document.querySelector("input");

function init() {
    if (button.innerText == "Start") {
        button.innerText = "Restart";
    }

    var history = document.querySelector("#guesses");
    history.innerHTML = "";

    // input.style.display = "block";
}

function guessMyNumber() {
    var rdmNumber = Math.floor(Math.random()*99+1);
    var history = document.querySelector("#guesses");
    var guess, p;
    
    for(var i = 0; i < 10; i++) {
        guess = prompt("Guess my number: ");
        guess = parseInt(guess);

        p = document.createElement("p");

        if(guess === rdmNumber) {
            p.innerText = "Correct!";
            history.appendChild(p);
            return;
        }else if (guess > rdmNumber) {
            p.innerText = "Too high!";
        }else if (guess < rdmNumber) {
            p.innerText = "Too low!";
        }else {
            p.innerText = "Invalid input!";
        }

        history.appendChild(p);
    }
    
    p.innerText = `End up tries. My number was ${rdmNumber}`;
    history.appendChild(p);
}

button.addEventListener("click", init);
button.addEventListener("click", guessMyNumber);