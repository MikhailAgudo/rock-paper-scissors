function computerPlay() {
    // Math.random() * 3 means Math.floor() must generate
    // a number from 0 to 2. Add "+ 1" to change it to 
    // 1 to 3
    let rpsChoice = Math.floor((Math.random() * 3) + 1);

    // Experimental. This returns the pure number.
    return rpsChoice;

    // Then, using a switch statement, return one of the
    // RPS outputs. If it somehow doesn't generate
    // a number from 1 to 3, it defaults into undefined.
    switch(rpsChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return;
    }
}

function determineWinner(player, opponent) {
    // https://stackoverflow.com/questions/2140627/how-to-do-case-insensitive-string-comparison
    // First, convert 'player' and 'opponent' into uppercase
    // so that it's case-insensitive.
    //player = player.toUpperCase();
    //opponent = opponent.toUpperCase();

    // I didn't want a long if-else statement of just
    // checking for strings, so RPS is coded as follows:
    // 1 = Rock
    // 2 = Paper
    // 3 = Scissors
    // The player's choice is then subtracted to the
    // opponents, and depending on the case, will return
    // as 0 (lose), 1 (win), or 2 (tie).
    let result = player - opponent;
    switch(result) {
        case -2: // rock vs. scissors
            return 1;
        case -1: // rock vs. paper, paper vs. scissors
            return 0;
        case 0: // tie
            return 2;
        case 1: // paper vs. rock, scissors vs. paper
            return 1;
        case 2: // scissors vs. rock
            return 0;
    }
}

function convertToNumber(choice) {
    // This function converts "rock" into 1, "paper"
    // into 2, and "scissors" into 3. First, turn the
    // string into upper case to it's easier to read.
    choice = choice.toUpperCase();

    // Then convert it into a number for the
    // determineWinner function.
    switch(choice) {
        case "ROCK":
            return 1;
        case "PAPER":
            return 2;
        case "SCISSORS":
            return 3;
        default:
            return;
    }
}

function convertToString(choice) {
    // The opposite of convertToNumber().
    switch(choice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
        default:
            return;
    }
}

function playRound(playerSelection, computerSelection) {
    
}