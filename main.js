const startButton = document.getElementById('start-button');
startButton.addEventListener('click', function() {
    location.reload(); // This will refresh the page
});

let playGame = confirm("shall we play a rock, paper or scissors?");

if (playGame){

    let playerChoice = prompt("Please Enter rock, paper or scissors.");

    if (playerChoice) {

        let playerOne = playerChoice.trim().toLocaleLowerCase();

        if (
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors"
        ){
            let  computerChoice = Math.floor(Math.random() * 3 +1);
            let computer =
            computerChoice === 1 ? "rock":
    
            computerChoice === 2 ? "paper":

            "scissors";

            let result =
             playerOne === computer
            ? "Tie Game":

            playerOne === "paper" && computer === "rock"
            ? `You: ${playerOne}\nComputer: ${computer}\nYou wins!`:

            playerOne === "scissors" && computer === "paper"
            ? `You: ${playerOne}\nComputerr: ${computer}\nYou wins!`:

            playerOne === "rock" && computer === "scissors"
            ? `You: ${playerOne}\nComputer: ${computer}\nYou wins!`:

            
             `You: ${playerOne}\nComputer: ${computer}\ncomputer wins!`;

             alert(result);
             let playAgain = confirm ("play again");

             playAgain ? location.reload() : alert ("ok, thanks for playing");
        }
        else{
            alert("you didn't enter rock, paper or sessiors");
        }   
    } else{
        alert("I guess you changed your mind. May be Next Time");
    }
}
else{
    alert("ok may be next time");
}