function computerPlay() {
    // Math.random() * 3 means Math.floor() must generate
    // a number from 0 to 2. Add "+ 1" to change it to 
    // 1 to 3
    let rpsChoice = Math.floor((Math.random() * 3) + 1);

    // Then, using a switch statement, return one of the
    // RPS outputs. If it somehow doesn't generate
    // a number from 1 to 3, it defaults into undefined.
    switch(rpsChoice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return;
            break;
    }
}