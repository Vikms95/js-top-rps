//TODO Implement gameFlow() to output winner in the UI
//Make the game work only if the click event is on "rock,paper,scissors"
//Improve UI
//  Show score while playing
//  Add epic sound effects

function computerSelection()
{
    const options = ["Rock","Paper","Scissors"];
    let chosenComputerNumber = Math.floor(Math.random() *options.length);
    let chosenComputerOption = options[chosenComputerNumber];
    const chosenComputerOptionCase = chosenComputerOption.toLowerCase();
    return chosenComputerOptionCase;
}

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

function displayOutputGame(gameWinner)
{
    const divReference = document.querySelector('div.output');
    const gameWinnerUp = capitalize(gameWinner);
    
    if(gameWinner === "computer" && gameWinner === "player"){
        divReference.textContent = `${gameWinnerUp} wins!`;
    }
    else
    {
        divReference.textContent = `It's a draw!`;
    }
}

function displayScoreGame(playerCount,computerCount)
{
    const divPlayerReference = document.querySelector('div.player-score');
    const divComputerReference = document.querySelector('div.computer-score');

    divPlayerReference.textContent = playerCount;
    divComputerReference.textContent = computerCount;
}

function addScore(roundWinner)
{   
    if(roundWinner == "player")
    {
        let divPlayerReference = document.querySelector('div.player-score');
        divPlayerReference.textContent++;
    }
    else if(roundWinner == "computer")
    {   
        let divComputerReference = document.querySelector('div.computer-score');
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

function choseGameWinner(gameWinner)
{   
    const divPlayerReference = document.querySelector('div.player-score');
    const divComputerReference = document.querySelector('div.computer-score');

    if( divPlayerReference.textContent === 5)
    {
        gameWinner = "player";
        displayOutputGame(gameWinner);
    }
    else if(divComputerReference.textContent === 5)
    {
        gameWinner = "computer";
        displayOutputGame(gameWinner);
    }
    else
    {
        return;
    }
}

function playRound(computerSelection,event)
{   
    let playerSelection = event.target.className;
    let roundWinner;
    let gameWinner;

    roundWinner = choseRoundWinner(computerSelection,playerSelection,roundWinner)
    addScore(roundWinner)
    choseGameWinner(gameWinner)

}

window.addEventListener('click', function(e) 
{
    if(!e.target.className) return;
    playRound(computerSelection(),e)

});

