Game logic
    Score is tracked outside of the event listener, 
    the function executed when the event happens is 
    only updating results and checking if the game can end.

    -playRound() executes when the event is listened
    -choseRoundWinner() executes, displays the roundWinner
     output and returns roundWinner as a String
    -addScore() executes, takes choseRoundWinner(),playerCount,computerCount
     and adds ++ to the div where the score is located directly (?)

