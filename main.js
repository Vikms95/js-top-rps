computerSelection();
    const options = ["Rock","Paper","Scissors"];
    const chosenOption = Math.floor(Math.random() *options.length);
    return chosenOption.toLowerCase();

playerSelection();
    const options = ["Rock","Paper","Scissors"];
    const chosenOption = window.prompt("Choose one: rock / paper / scissors")
    return chosenOption.toLowerCase();


playRound(computer,player)
    if(computer == player)
    {
        console.log("It's a draw!")
        break;
    }else if(player == "paper")
    {
        if(computer == "scissors")
        {
            console.log("You lose! Scissors beats Paper!")
        }else
        {
            console.log("You win! Paper beats Rock!")
        }
    }else if(player == "rock")
    {
        if(computer == "paper")
        {
            console.log("You lose! Paper beats Rock!") 
        }else
        {
            console.log("You win ! Rock beats Paper!")
        }
    }else
    {
        if(computer == "rock")
        {
            console.log("You lose! Rock beats Scissors!")
        }else
        {
            console.log("You win! Scissors beat Paper!")
        }
    }
