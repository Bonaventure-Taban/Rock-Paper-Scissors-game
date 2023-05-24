// Function to receive computer's Input

function getComputerChoice(){
    let choice = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    let computerChoice = choice[randomIndex]
    return computerChoice;
}
//Function to play a single round of Rock Paper Scissors

chances = 5;
let playerScore = 0;
let computerScore = 0;

function playGround(playerSelection, computerSelection){
    console.log(`Player Selection is: ${playerSelection}`);
    console.log(`Computer Selection is: ${computerSelection}`);

    if (playerSelection === computerSelection){
        console.log("It's a tie!!");
    }
    else if( playerSelection === "Rock" && computerSelection === "Scissors" ||
             playerSelection === "Paper" && computerSelection === "Rock" ||
             playerSelection === "Scissors" && computerSelection === "Paper"){
                console.log("Player Wins this round!");
                playerScore++;
               }
    else{
        console.log("Computer Wins this round!");
        computerScore++;
               }

    console.log(`Player Score ${playerScore}`);
    console.log(`Computer Score ${computerScore}`);
    console.log("----------------------------");

    
}


function game(){
    
    for(let i = 0; i < chances; i++){

        let playerSelection = prompt("Please enter your choice: ");
        let computerSelection = getComputerChoice();

        playGround(playerSelection,computerSelection);
    }

}

game();
console.log("Game Over!")

if (playerScore > computerScore){
    console.log("Player Won the game!");
} else if(computerScore > playerScore){
    console.log("Computer Won the game");
}else{
    console.log("It's a tie!");
}
