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

function displayOutput(computerSelection,playerSelection,roundWinner){
   const divReference = document.querySelector('div');
   
   if(roundWinner === "computer"){
        divReference.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
   }
   else if(roundWinner === "player")
   {
    divReference.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
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
        displayOutput(computerSelection,playerSelection,roundWinner)
       
    }else if(playerSelection == "paper")
    {
        if(computerSelection == "scissors")
        {   
            roundWinner = "computer";
            displayOutput(computerSelection,playerSelection,roundWinner)
            return roundWinner;
        }else
        {   
            roundWinner = "player";
            displayOutput(computerSelection,playerSelection,roundWinner)
            return roundWinner;
        }
    }else if(playerSelection == "rock")
    {
        if(computerSelection == "paper")
        {   
            roundWinner = "computer";
            displayOutput(computerSelection,playerSelection,roundWinner)
            return roundWinner;
        }else
        {   
            roundWinner = "player";
            displayOutput(computerSelection,playerSelection,roundWinner)
            return roundWinner;
        }
    }else
    {
        if(computerSelection == "rock")
        {   
            roundWinner = "computer";
            displayOutput(computerSelection,playerSelection,roundWinner)
            return roundWinner;
        }else
        {   
            roundWinner = "player";
            displayOutput(computerSelection,playerSelection,roundWinner)
            return roundWinner;
        }
    }
}

function gameFlow(){
    let playerCount = 0;
    let computerCount = 0;

    while(playerCount < 5 && computerCount < 5){
        let result = playRound(computerSelection(),playerSelection())
        console.log(result)
        if(result == "computer")
        {
            computerCount++;

        }else if(result == "player")
        {
            playerCount++;
        }
        else if(result == "It's a draw!")
        {
            alert("It's a draw")
        }
    }

    if(playerCount === 5){
        alert("Player wins!")
    }
    else if (computerCount === 5){
        alert("Computer wins!")
    }
    else{
        alert("Game is broken")
    }
}

window.addEventListener('click', function(e) {
    if(!e.target.className) return;
    playRound(computerSelection(),e)
});