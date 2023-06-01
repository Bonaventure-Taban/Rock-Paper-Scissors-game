const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

//Function to play game
function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice);
    displayWinner(winner, computerChoice);
}

// Function to receive computer's Input

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[randomIndex];
    return computerSelection;
}

//Function to get the Winner 
function getWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return "Tie";
    }
    else if( playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"){
        return "Player";     
    }
    else{
        return "Computer";
    }
}

//Function to display winner
function displayWinner(winner, computerChoice){
    if(winner === "Player"){
        scoreboard.player++; // Increment player score

        // display modal result
        result.innerHTML = `
        <p> Computer chose <strong>${computerChoice}</strong></p>
        <h1 class="text-win">You Win!</h1>
        `;
    }else if(winner === "Computer"){
        scoreboard.computer++; //Increment computer score

        //display modal result
        result.innerHTML = `
        <p>Computer chose <strong>${computerChoice}</strong></p>
        <h1 class="text-lose">You Lose!</h1>
        `;
    }else {
        result.innerHTML = `
        <p>Computer chose <strong>${computerChoice}</strong></p>
        <h1 class="text-lose">It's a Tie!</h1>
        `;
    }

    //display score
    score.innerHTML=`
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display= "block";
}

function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0 </p>
    <p>Computer: 0</p>
    `;
}

function clearModal(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
