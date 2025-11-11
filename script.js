let rock = document.querySelector(".rockBtn");
let paper = document.querySelector(".paperBtn");
let scissors = document.querySelector(".scissorsBtn");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function getComputerImage() {
    const container = document.querySelector(".computerChoice");
    container.innerHTML = "";

    let computerImage = document.createElement("img");

    if (computerChoice === "rock") {
        computerImage.src = "rock.png";
    } else if (computerChoice === "paper") {
        computerImage.src = "paper.png";
    } else {
        computerImage.src = "scissors.png";
    }

    container.appendChild(computerImage);
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        console.log("You win! Paper beats Rock.");
        document.querySelector(".score").innerHTML = "";
        let result = document.createElement('h2');
        result.textContent = "You win! Paper beats Rock."
        document.querySelector(".score").appendChild(result);

    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        console.log("You win! Scissors beats Paper.");
        document.querySelector(".score").innerHTML = "";
        let result = document.createElement('h2');
        result.textContent = "You win! Scissors beats Paper."
        document.querySelector(".score").appendChild(result);

    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        console.log("You win! Rock beats Scissors.");
        document.querySelector(".score").innerHTML = "";
        let result = document.createElement('h2');
        result.textContent = "You win! Rock beats Scissors."
        document.querySelector(".score").appendChild(result);

    } else if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        document.querySelector(".score").innerHTML = "";
        let result = document.createElement('h2');
        result.textContent = "It's a tie!"
        document.querySelector(".score").appendChild(result);
        
    } else {
        computerScore++;
        console.log("You lose! Try again.");
        document.querySelector(".score").innerHTML = "";
        let result = document.createElement('h2');
        result.textContent = "You lose! Try again."
        document.querySelector(".score").appendChild(result);
    }

    let humanScoreCount = document.createElement("p")
    humanScoreCount.textContent = "Your score: " + humanScore;
    document.querySelector(".score").appendChild(humanScoreCount);
    
    let computerScoreCount = document.createElement("p")
    computerScoreCount.textContent = "Computer Score: " + computerScore;
    document.querySelector(".score").appendChild(computerScoreCount);
    console.log(`Your score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);
}

rock.addEventListener('click', () => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();

    document.querySelector(".humanChoice").innerHTML = "";

    playRound(computerChoice, humanChoice);

    let humanHeader = document.createElement("h2");
    humanHeader.textContent = "Your choice";
    document.querySelector(".humanChoice").appendChild(humanHeader);

    let selection = document.createElement("img");
    selection.src = "rock.png";
    document.querySelector(".humanChoice").appendChild(selection);
    
    getComputerImage();

    let computerHeader = document.createElement("h2");
    computerHeader.textContent = "Computer choice";
    document.querySelector(".computerChoice").prepend(computerHeader);
});


paper.addEventListener('click', () => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();

    document.querySelector(".humanChoice").innerHTML = "";

    playRound(computerChoice, humanChoice);

    let humanHeader = document.createElement("h2");
    humanHeader.textContent = "Your choice";
    document.querySelector(".humanChoice").appendChild(humanHeader);

    let selection = document.createElement("img");
    selection.src = "paper.png";
    document.querySelector(".humanChoice").appendChild(selection);

    getComputerImage();

    let computerHeader = document.createElement("h2");
    computerHeader.textContent = "Computer choice";
    document.querySelector(".computerChoice").prepend(computerHeader);
});

scissors.addEventListener('click', () => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();

    document.querySelector(".humanChoice").innerHTML = "";

    playRound(computerChoice, humanChoice);

    let humanHeader = document.createElement("h2");
    humanHeader.textContent = "Your choice";
    document.querySelector(".humanChoice").appendChild(humanHeader);

    let selection = document.createElement("img");
    selection.src = "scissors.png";
    document.querySelector(".humanChoice").appendChild(selection);

    getComputerImage();

    let computerHeader = document.createElement("h2");
    computerHeader.textContent = "Computer choice";
    document.querySelector(".computerChoice").prepend(computerHeader);
});