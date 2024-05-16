function getComputerChoice() {
    //Return computer's choice of rock, paper, or scissors
    let dice = Math.floor(Math.random() * 100);
    let computerChoice;
    if (dice < 35) {
        computerChoice = "Rock";
    } else if (dice >= 35 && dice < 68) {
        computerChoice = "Paper";
    } else if (dice >= 68 ) {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice;
    let choice = prompt("Press 1 for Rock, 2 for Paper, or 3 for Scissors");
    switch (choice) {
        case "1":
            humanChoice = "Rock";
            break;

        case "2":
            humanChoice = "Paper";
            break;
        
        case "3":
            humanChoice = "Scissors";
            break;
        
        default:
            humanChoice = "Rock";
    }

    return humanChoice;
}

console.log(getHumanChoice());