//TODO Implement gameFlow() to output winner in the UI
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
   const divReference = document.querySelector('div');
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
    const divReference = document.querySelector('div');
    const gameWinnerUp = capitalize(gameWinner);
    
    if(gameWinner === "computer" && gameWinner === "player"){
        divReference.textContent = `${gameWinnerUp} wins!`;
    }
    else
    {
        divReference.textContent = `It's a draw!`;
    }
}

function playRound(computerSelection,event)
{   
    const playerSelection = event.target.className;
    let roundWinner;

    if(computerSelection == playerSelection)
    {
        displayOutputRound(computerSelection,playerSelection,roundWinner)
       
    }else if(playerSelection == "paper")
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
    }else if(playerSelection == "rock")
    {
        if(computerSelection == "paper")
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
    }else
    {
        if(computerSelection == "rock")
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
}

/*Logic for gameFlow:

*/
function gameFlow(playRound)
{
    let playerCount = 0;
    let computerCount = 0;

    while(playerCount < 5 && computerCount < 5)
    {
        if(result == "computer")
        {
            computerCount++;

        }else if(result == "player")
        {
            playerCount++;
        }
        else if(result == "It's a draw!")
        {
            alert("It's a draw");
        }
    }

    if(playerCount === 5)
    {
        alert("Player wins!")
    }
    else if (computerCount === 5)
    {
        alert("Computer wins!")
    }
    else{
        alert("Game is broken")
    }
}

window.addEventListener('click', function(e) {
    if(!e.target.className) return;
    gameFlow(playRound(computerSelection(),e))
});