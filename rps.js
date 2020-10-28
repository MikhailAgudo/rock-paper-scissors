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

function determineMatchCode(playerSelection, computerSelection) {
    // The match code is 0 (loss), 1 (win), 2 (tie).
    // This is used in the playRound() function
    // and in the jackEnPoy() function. In the latter,
    // it's useful in determining who gets points.

    // First, convert playerSelection into a number
    // if it's a string.
    if (typeof playerSelection === "string") {
        playerSelection = convertToNumber(playerSelection);
    }

    // Then, determine the winner.
    return determineWinner(playerSelection, computerSelection);

}

function playRound(playerSelection, computerSelection) {
    // First, determine the match code.
    let roundResult = determineMatchCode(playerSelection,
        computerSelection);
    
    // To be able to use the same variables, for the 
    // returning string, convert/reconvert into string.
    // For the player, only do so if it's a number.
    if (typeof playerSelection === "number") {
        playerSelection = convertToString(playerSelection);
    }
    computerSelection = convertToString(computerSelection);
    
    // Finally, determine what the returned string is.
    switch(roundResult) {
        case 0:
            return "You lose! " + computerSelection + " beats " +
                playerSelection + "!";
        case 1:
            return "You win! " + playerSelection + " beats " +
                computerSelection + "!";
        case 2:
            return ("Tie! " + playerSelection + " ties with " +
                computerSelection + "!");
    }
}

function jackEnPoy() { 
    // Trivia: "jack and poy" is the name 
    // of rock paper scissors in the Philippines,
    // which probably game Japan's "janken".

    // This is the main game loop. The player is asked
    // an input via prompt(), over the course of five rounds.
    let playerPoints = 0;
    let computerPoints = 0;
    const rounds = 5;

    for(let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Welcome to Rock Paper Scissors!" + 
            " This is round " + (i + 1) + " of 5!" + 
            " You have " + playerPoints + " points, against " +
            " the foe's " + computerPoints + "!" +
            " Type 'rock', 'paper', or 'scissors' to play!");
        const computerSelection = computerPlay();

        let roundResult = determineWinner
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));