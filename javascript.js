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

function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log("You chose " + humanChoice + ".");
    console.log("Computer chose " + computerChoice + ".");
    if (humanChoice === computerChoice) {
        console.log("You tied! You each get a point!");
        ++humanScore;
        ++computerScore;
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
               (humanChoice === "Paper" && computerChoice === "Rock") ||
               (humanChoice === "Scissors" && computerChoice === "Paper")) {
        
        console.log("Human wins!");
        ++humanScore;
    } else {
        console.log("Computer wins!");
        ++computerScore
    }

}
    
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

while(humanScore < 5 && computerScore < 5) {
    console.log("Score: Human " + humanScore + ", Computer " + computerScore)
    playRound();
    ++roundCounter;
}

if (humanScore > computerScore) {
    console.log("You win!");
} else if (computerScore > humanScore) {
    console.log("The computer wins!");
} else {
    console.log("It's a tie!")
}

console.log("The game ended after " + roundCounter + " rounds.")





