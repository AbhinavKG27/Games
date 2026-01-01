let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const gameDraw = () =>{
    console.log("Game was Drawn")
    msg.textContent = `Game was a Draw`;
    msg.style.backgroundColor = "Blue";
}

const playGame = (userChoice) => {
    console.log("User Choice : "+userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice : "+compChoice);
    if(userChoice === compChoice){
        gameDraw();
    }else if(
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ){
        userScore++;
        userScoreDisplay.textContent = userScore;
        console.log("User Wins! Score: User - " + userScore + ", Computer - " + compScore);
        msg.textContent = `You chose ${userChoice}, Computer chose ${compChoice}. You win!`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreDisplay.textContent = compScore;
        console.log("Computer Wins! Score: User - " + userScore + ", Computer - " + compScore);
        msg.textContent = `You chose ${userChoice}, Computer chose ${compChoice}. You lose!`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
