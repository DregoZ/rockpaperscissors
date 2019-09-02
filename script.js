var p1_score;
var cpu_score;
var tie_score;
var x;
var y;
var rock;
var paper;
var scissors;

window.onload = function () {
    x = document.getElementById("button-area");
    x.style.display = "none";
    y = document.getElementById("play-area");
    rock = document.getElementById('rock');
    paper = document.getElementById('paper');
    scissors = document.getElementById('scissors');


    /* adds events to every button and calls playRound() on click... */
    rock.addEventListener('click', function () {
        playRound('rock', computerPlay());

    });

    paper.addEventListener('click', function () {
        playRound('paper', computerPlay());
    });

    scissors.addEventListener('click', function () {
        playRound('scissors', computerPlay());
    });


}

function TooglePlay() {

    p1_score = 0;
    cpu_score = 0;
    tie_score = 0;

    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("play").innerHTML = "Play again!";
        document.getElementById("p1score").innerHTML = p1_score;
        document.getElementById("cpuscore").innerHTML = cpu_score;
        document.getElementById("tiescore").innerHTML = tie_score;
        y.style.display = "none";


    } else {
        x.style.display = "none";
        y.style.display = "block";
    }

}




function computerPlay() {
    var computerSelection = Math.ceil(Math.random() * 3);

    switch (computerSelection) {

        case 1: computerSelection = 'rock';
            break;
        case 2: computerSelection = 'paper';
            break;
        case 3: computerSelection = 'scissors';
            break;

    }
    console.log('CPU: ' + computerSelection);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    var win_quote = "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
    var lose_quote = "You lose! " + playerSelection.toUpperCase() + " loses to " + computerSelection.toUpperCase() + "!";


    if (playerSelection == computerSelection) {
        tie_score++;
        checkResult(p1_score, cpu_score);
        console.log("It's a DRAW! " + playerSelection.toUpperCase() + " vs. " + computerSelection.toUpperCase() + "!");
    } else switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') {
                cpu_score++;
                console.log(lose_quote);
                console.log("CPU: " + cpu_score);
            } else {
                p1_score++;
                console.log(win_quote);
                console.log("P1: " + p1_score);
            }
            checkResult(p1_score, cpu_score);
            break;

        case 'paper':
            if (computerSelection == 'scissors') {
                cpu_score++;
                console.log(lose_quote);
                console.log("CPU: " + cpu_score);
            } else {
                p1_score++;
                console.log(win_quote);
                console.log("P1: " + p1_score);
            }
            checkResult(p1_score, cpu_score);
            break;

        case 'scissors':
            if (computerSelection == 'rock') {
                cpu_score++;
                console.log(lose_quote);
                console.log("CPU: " + cpu_score);
            } else {
                p1_score++;
                console.log(win_quote);
                console.log("P1: " + p1_score);
            }
            checkResult(p1_score, cpu_score);
            break;
        default:
            console.log("You messed up. That's not how you play RPS!\n Try again...");
    }


}

function checkResult(p1_score, cpu_score) {

    document.getElementById("p1score").innerHTML = p1_score;
    document.getElementById("cpuscore").innerHTML = cpu_score;
    document.getElementById("tiescore").innerHTML = tie_score;
    if (p1_score == 5) {
        console.log("************** VICTORY! P1: " + p1_score + " CPU: " + cpu_score);
        TooglePlay();
    } else if (cpu_score == 5) {
        console.log("************** DEFEAT! P1: " + p1_score + " CPU: " + cpu_score);
        TooglePlay();
    }



}
