//Game Logic
function getComputerChoice() {
    //Return computer's choice of rock, paper, or scissors
    let dice = Math.floor(Math.random() * 100);
    if (dice < 35) {
        return "Rock";
    } else if (dice >= 35 && dice < 68) {
        return "Paper";
    } else if (dice >= 68 ) {
        return "Scissors";
    }
}

function getHumanChoice(choice) {
    switch (choice) {
        case "rock":
            return "Rock";
            
        case "paper":
            return "Paper";
                   
        case "scissors":
            return "Scissors";
        
        default:
            return "Error";
    }
}

function playRound(choice) {
    if(roundCounter <=5) {
        roundCounter++;
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice(choice);
        actions.textContent = "You chose " + humanChoice + ", Computer chose " + computerChoice;
        action.appendChild(actions);

        console.log("You chose " + humanChoice + ".");
        console.log("Computer chose " + computerChoice + ".");
        if (humanChoice === computerChoice) {
            console.log("You tied! You each get a point!");
            ++humanScore;
            ++computerScore;
            content.textContent = "Current score is " + humanScore + " to " + computerScore;
            results.appendChild(content);
        } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
                (humanChoice === "Paper" && computerChoice === "Rock") ||
                (humanChoice === "Scissors" && computerChoice === "Paper")) {
            
            console.log("You wins this round! You earned one point!");
            ++humanScore;
            content.textContent = "Current score is " + humanScore + " to " + computerScore;
            results.appendChild(content);
        } else {
            console.log("Computer wins! It earned one point!");
            ++computerScore;
            content.textContent = "Current score is " + humanScore + " to " + computerScore;
            results.appendChild(content);
        } 
    } else {
        if (humanScore > computerScore) {
            content.textContent = "After five rounds, the winner is YOU!";
            results.appendChild(content);
        } else if (humanScore < computerScore) {
            content.textContent = "After five rounds, the computer wins!";
            results.appendChild(content);
        } else {
            content.textContent = "After five rounds, it's a tie!";
            results.appendChild(content);
        }
    }
}
    
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

//Button and DOM logic
const results = document.querySelector("#results");
const content = document.createElement("div");
content.classList.add("content");

const action = document.querySelector("#action");
const actions = document.createElement("div");
content.classList.add("actions");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});
