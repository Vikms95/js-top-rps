//TODO 
//Improve UI
//Add epic sound effects

function computerSelection()
{
    const options = ["Rock","Paper","Scissors"];
    let chosenComputerNumber = Math.floor(Math.random() *options.length);
    let chosenComputerOption = options[chosenComputerNumber];
    const chosenComputerOptionCase = chosenComputerOption.toLowerCase();
    return chosenComputerOptionCase;
}

//Only for console version of RPS
function playerSelection()
{
    const chosenPlayerOption = prompt("Choose one: rock / paper / scissors")
    const chosenPlayerOptionCase = chosenPlayerOption.toLowerCase();
    return chosenPlayerOptionCase;
}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function displayOutputRound(computerSelection,playerSelection,roundWinner)
{
   const divReference = document.querySelector('div.output');
   const computerSelectionUp = capitalize(computerSelection);
   const playerSelectionUp = capitalize(playerSelection);
   
   if(roundWinner === "computer"){
        divReference.textContent = `You lose! ${computerSelectionUp} beats ${playerSelectionUp}`;
   }
   else if(roundWinner === "player")
   {
    divReference.textContent = `You win! ${playerSelectionUp} beats ${computerSelectionUp}`;
   }
   else
   {
    divReference.textContent = `It's a draw!`;
   }
}

function displayOutputGame(gameWinner,divPlayerReference,divComputerReference)
{
    const divReference = document.querySelector('div.output');
    const gameWinnerUp = capitalize(gameWinner);
    
    if(gameWinner === "computer" || gameWinner === "player"){
        divReference.textContent = `${gameWinnerUp} wins the duel!`;
        divPlayerReference.textContent = 0;
        divComputerReference.textContent = 0;
    }
    else
    {
        divReference.textContent = `Game is broken!`;
    }
}

function addScore(roundWinner,divPlayerReference,divComputerReference)
{   
    if(roundWinner == "player")
    {
        divPlayerReference.textContent++;
    }
    else if(roundWinner == "computer")
    {   
        divComputerReference.textContent++;
    }
    else
    {
        return;
    }
}

function choseRoundWinner(computerSelection,playerSelection,roundWinner)
{
    if(computerSelection === playerSelection)
    {   
        roundWinner = "It's a draw!"
        displayOutputRound(computerSelection,playerSelection,roundWinner)
        
       
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "scissors")
        {   
            roundWinner = "computer";
            displayOutputRound(computerSelection,playerSelection,roundWinner)
            return roundWinner;
        }else
        {   
            roundWinner = "player";
            displayOutputRound(computerSelection,playerSelection,roundWinner)
            return roundWinner;

        }
    }
    else if(playerSelection == "rock")
    {
        if(computerSelection == "paper")
        {   
            roundWinner = "computer";
            displayOutputRound(computerSelection,playerSelection,roundWinner)
            return roundWinner;
        }
        else
        {   
            roundWinner = "player";
            displayOutputRound(computerSelection,playerSelection,roundWinner)
            return roundWinner;

        }
    }
    else
    {
        if(computerSelection == "rock")
        {   
            roundWinner = "computer";
            displayOutputRound(computerSelection,playerSelection,roundWinner)
            return roundWinner;

            
        }
        else
        {   
            roundWinner = "player";
            displayOutputRound(computerSelection,playerSelection,roundWinner)
            return roundWinner;

        }
    }
}

function playRound(computerSelection,event)
{   
    let playerSelection = event.target.className;
    let divPlayerReference = document.querySelector('div.player-score');
    let divComputerReference = document.querySelector('div.computer-score');
    let roundWinner;
    let gameWinner;

    roundWinner = choseRoundWinner(computerSelection,playerSelection,roundWinner)
    addScore(roundWinner,divPlayerReference,divComputerReference)

    if(divPlayerReference.textContent == 5)
    {   
        gameWinner = "player";
        displayOutputGame(gameWinner,divPlayerReference,divComputerReference)
    }
    else if(divComputerReference.textContent == 5)
    {
        gameWinner = "computer";
        displayOutputGame(gameWinner,divPlayerReference,divComputerReference);
    }
    else
    {
        return;
    }
}

window.addEventListener('click', function(e) 
{
    if(!(e.target.className === "rock"
        || e.target.className === "paper" 
        || e.target.className === "scissors")) return;
        
    playRound(computerSelection(),e)
});

