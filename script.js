        var p1_score = 0;
        var cpu_score = 0;
        var tie_score = 0;

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


        function playerPlay() {

            var playerSelection = prompt('Choose your play!');
            playerSelection = playerSelection.toLowerCase();
            console.log('Player: ' + playerSelection);
            return playerSelection;
        }


        function playRound(playerSelection, computerSelection) {
            var win_quote = "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
            var lose_quote = "You lose! " + playerSelection.toUpperCase() + " loses to " + computerSelection.toUpperCase() + "!";

            if (playerSelection == computerSelection) {
                tie_score++;
                console.log ("It's a DRAW! " + playerSelection.toUpperCase() + " vs. " + computerSelection.toUpperCase() + "!");
            } else switch (playerSelection) {
                case 'rock':
                    if (computerSelection == 'paper') {
                        cpu_score++;
                        console.log (lose_quote);
                    } else {
                        p1_score++;
                        console.log (win_quote);
                        }
                    break;

                case 'paper':
                    if (computerSelection == 'scissors') {
                        cpu_score++;
                        console.log (lose_quote);
                    } else {
                        p1_score++;
                        console.log (win_quote);
                        }
                    break;

                case 'scissors':
                    if (computerSelection == 'rock') {
                        cpu_score++;
                        console.log (lose_quote);
                    } else {
                        p1_score++;
                        console.log (win_quote);
                    }
                    break;
                default:
                    console.log("You messed up. That's not how you play RPS!\n Try again...");
            }


        }


        function game() {

            for (var i = 0; i < 5; i++) {
                var playerSelection = playerPlay();
                var computerSelection = computerPlay();
                playRound(playerSelection, computerSelection);
               
            }

            if (p1_score == cpu_score) {
                console.log("Player: " +p1_score+ ". CPU: " + cpu_score+ ". Ties: "+ tie_score+ ". Draw game!");

            } else if (p1_score > cpu_score) {
                console.log("Player: " +p1_score+ ". CPU: " + cpu_score+ ". Ties: "+ tie_score+ ". You win!");
            }else {
                console.log("Player: " +p1_score+ ". CPU: " + cpu_score+ ". Ties: "+ tie_score+ ". You lose!");
            }
 

        }

        game();


