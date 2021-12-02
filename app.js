// function player1 (userChoice) 
// {
//     let choice = userChoice.toLowerCase();
//     return choice;
// }

// function player2 (userChoice2)
// {
//     let choice = userChoice2.toLowerCase();
//     return choice;
// }

function rockPaperScissors(choice1, choice2)
{
    let player1 = choice1.toLowerCase();
    let player2 = choice2. toLowerCase();

    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    )
    {
        console.log(`Player1: ${choice1} vs Player2: ${choice2}`);
        console.log(`Congratulations Player1, YOU WIN!!!`);
    }
    else if (
        (player1 === "rock" && player2 === "paper") ||
        (player1 === "paper" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "rock")
    )
    {
        console.log(`Player1: ${choice1} vs Player2: ${choice2}`);
        console.log(`Congratulations Player2, YOU WIN!!!`);
    }
    else if (
        (player1 === "rock" && player2 === "rock") ||
        (player1 === "paper" && player2 === "paper") ||
        (player1 === "scissors" && player2 === "scissors")
    )
    {
        console.log(`Player1: ${choice1} vs Player2: ${choice2}`);
        console.log(`TIE!!!`);
    }
    else 
    {
        console.log(`Please input ROCK, PAPER, or SCISSORS`);
    }
}