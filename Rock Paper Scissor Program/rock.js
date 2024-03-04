
const choices=['rock','paper','scissor'];
const playerDisplay=document.getElementById('playerDisplay');
const computerDisplay=document.getElementById('computerDisplay');
const resultDisplay=document.getElementById('resultDisplay');
const playerScoreDisplay=document.getElementById('playerScoreDisplay');
const computerScoreDisplay=document.getElementById('computerScoreDisplay');
let playerScore=0;
let computerScore=0;

function playGame(playerChoice){

    const computerChoice= choices[Math.floor(Math.random() * 3)];
    let result="";

    if(playerChoice === computerChoice){
        result= "It's a Tie!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="scissor") ? "You Win!"  : "You Lose!";
            break;

            case "paper":
                result=(computerChoice==="rock") ? "You Win!"  : "You Lose!";
            break;

            case "scissor":
                result=(computerChoice==="paper") ? "You Win!"  : "You Lose!";
            break;
    }
}

playerDisplay.textContent=`Player: ${playerChoice}`;
computerDisplay.textContent=`Computer: ${computerChoice}`;
resultDisplay.textContent=result;

switch(result){
    case "You Win!":
        resultDisplay.classList.remove("redText");
        resultDisplay.classList.add("greentext"); 
        playerScore++;
        playerScoreDisplay.textContent=playerScore;
        break;

    case "You Lose!":
        resultDisplay.classList.add("redText");
        resultDisplay.classList.remove("greentext"); 
        computerScore++;
        computerScoreDisplay.textContent=computerScore;
        break;
    case "It's a Tie!":
        resultDisplay.classList.remove("redText");
        resultDisplay.classList.remove("greentext"); 
        resultDisplay.classList.add("greentext"); 

}
}