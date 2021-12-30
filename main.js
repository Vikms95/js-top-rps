function computerSelection()
{
    const options = ["Rock","Paper","Scissors"];
    let chosenComputerNumber = Math.floor(Math.random() *options.length);
    let chosenComputerOption = options[chosenComputerNumber];
    const chosenComputerOptionCase = chosenComputerOption.toLowerCase();
    console.log(chosenComputerOptionCase);
    return chosenComputerOptionCase;
}

function playerSelection()
{
    const chosenPlayerOption = prompt("Choose one: rock / paper / scissors")
    const chosenPlayerOptionCase = chosenPlayerOption.toLowerCase();
    console.log(chosenPlayerOptionCase)
    return chosenPlayerOptionCase
}

function playRound(computerSelection,event)
{   
    const playerSelection = event.target.className
    if(computerSelection == playerSelection)
    {
        alert("It's a draw!")
       
    }else if(playerSelection == "paper")
    {
        if(computerSelection == "scissors")
        {
            alert("You lose! Scissors beats Paper!")
            return "computer";
        }else
        {
            alert("You win! Paper beats Rock!")
            return "player";
        }
    }else if(playerSelection == "rock")
    {
        if(computerSelection == "paper")
        {
            alert("You lose! Paper beats Rock!") 
            return "computer";
        }else
        {
            alert("You win ! Rock beats Scissors!")
            return "player";
        }
    }else
    {
        if(computerSelection == "rock")
        {
            alert("You lose! Rock beats Scissors!")
            return "computer";
        }else
        {
            alert("You win! Scissors beat Paper!")
            return "player";
        }
    }
}

// function gameFlow(){
//     let playerCount = 0;
//     let computerCount = 0;

//     while(playerCount < 5 && computerCount < 5){
//         let result = playRound(computerSelection(),playerSelection())
//         console.log(result)
//         if(result == "computer")
//         {
//             computerCount++;

//         }else if(result == "player")
//         {
//             playerCount++;
//         }
//         else if(result == "It's a draw!")
//         {
//             alert("It's a draw")
//         }
//     }

//     if(playerCount === 5){
//         alert("Player wins!")
//     }
//     else if (computerCount === 5){
//         alert("Computer wins!")
//     }
//     else{
//         alert("Game is broken")
//     }
// }

window.addEventListener('click', function(e) {
    if(!e.target.className) return;
    playRound(computerSelection,e)
});