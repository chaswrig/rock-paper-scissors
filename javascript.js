function getComputerChoice() {
    //Return computer's choice of rock, paper, or scissors
    let dice = Math.floor(Math.random() * 100);
    let choice;
    if (dice < 35) {
        choice = "Rock";
    } else if (dice >= 35 && dice < 68) {
        choice = "Paper";
    } else if (dice >= 68 ) {
        choice = "Scissors";
    }

    return choice;
}

console.log(getComputerChoice());