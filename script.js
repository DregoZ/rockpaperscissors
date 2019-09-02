var p1_score;
var cpu_score;
var tie_score;
var buttons;
var play;
var rock;
var paper;
var scissors;

window.onload = function () {
    buttons = document.getElementById("button-area");
    buttons.style.display = "none";
    play = document.getElementById("play-area");
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

    if (buttons.style.display === "none") {
        buttons.style.display = "block";
        document.getElementById('result').innerHTML = "";
        document.getElementById('play-result').innerHTML = "";
        document.getElementById("play").innerHTML = "Play again!";
        document.getElementById("p1score").innerHTML = p1_score;
        document.getElementById("cpuscore").innerHTML = cpu_score;
        document.getElementById("tiescore").innerHTML = tie_score;
        play.style.display = "none";


    } else {
        buttons.style.display = "none";
        play.style.display = "block";
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
        document.getElementById('play-result').innerHTML = "It's a DRAW! " + playerSelection.toUpperCase() + " vs. " + computerSelection.toUpperCase() + "!";
    } else switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') {
                cpu_score++;
                document.getElementById('play-result').innerHTML = lose_quote;
                
            } else {
                p1_score++;
                document.getElementById('play-result').innerHTML = win_quote;
               
            }
            checkResult(p1_score, cpu_score);
            break;

        case 'paper':
            if (computerSelection == 'scissors') {
                cpu_score++;
                document.getElementById('play-result').innerHTML = lose_quote;
               
            } else {
                p1_score++;
                document.getElementById('play-result').innerHTML = win_quote;
                
            }
            checkResult(p1_score, cpu_score);
            break;

        case 'scissors':
            if (computerSelection == 'rock') {
                cpu_score++;
                document.getElementById('play-result').innerHTML = lose_quote;
               
            } else {
                p1_score++;
                document.getElementById('play-result').innerHTML = win_quote;
                
            }
            checkResult(p1_score, cpu_score);
            break;
        default:
            break;
    }


}

function checkResult(p1_score, cpu_score) {

    document.getElementById("p1score").innerHTML = p1_score;
    document.getElementById("cpuscore").innerHTML = cpu_score;
    document.getElementById("tiescore").innerHTML = tie_score;
    
    if (p1_score == 5) {
        document.getElementById('result').innerHTML = 'YOU WIN!!';
        document.getElementById('play-result').innerHTML = "Guess you got lucky..."
        TooglePlay();
    } else if (cpu_score == 5) {
        document.getElementById('result').innerHTML = 'YOU LOSE!!';
        document.getElementById('play-result').innerHTML = "I knew you suck at this"
        TooglePlay();
    }



}
