function computerSelection()
{
    const options = ["Rock","Paper","Scissors"];
    let chosenComputerNumber = Math.floor(Math.random() *options.length);
    let chosenComputerOption = options[chosenComputerNumber]
    const chosenComputerOptionCase = chosenComputerOption.toLowerCase();
    console.log(chosenComputerOptionCase)
    return chosenComputerOptionCase
}

function playerSelection()
{
    const chosenPlayerOption = prompt("Choose one: rock / paper / scissors")
    const chosenPlayerOptionCase = chosenPlayerOption.toLowerCase();
    console.log(chosenPlayerOptionCase)
    return chosenPlayerOptionCase
}

function playRound(computer,player)
{
    if(computer == player)
    {
        console.log("It's a draw!")
       
    }else if(player == "paper")
    {
        if(computer == "scissors")
        {
            console.log("You lose! Scissors beats Paper!")
            return "computer";
        }else
        {
            console.log("You win! Paper beats Rock!")
            return "player";
        }
    }else if(player == "rock")
    {
        if(computer == "paper")
        {
            console.log("You lose! Paper beats Rock!") 
            return "computer";
        }else
        {
            console.log("You win ! Rock beats Scissors!")
            return "player";
        }
    }else
    {
        if(computer == "rock")
        {
            console.log("You lose! Rock beats Scissors!")
            return "computer";
        }else
        {
            console.log("You win! Scissors beat Paper!")
            return "player";
        }
    }
}

function gameFlow()
{
    let playerCount = 0;
    let computerCount = 0;

    while(playerCount < 5 || computerCount < 5)
    {
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
        else
        {
            break;
        }

    }

    if(playerCount == 5)
    {
        alert("Player wins!")
    }
    else if (computerCount == 5)
    {
        alert("Computer wins!")
    }
    else
    {
        alert("Game is broken")
    }
}

gameFlow()