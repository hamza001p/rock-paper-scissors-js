let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

showWinner = (userWin ,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
    }else{
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = `You Loss! ${compChoice} beats your ${userChoice}`
}
}

const drawGame = ()=> {
    console.log("game was draw");
     msg.innerText = "Gama was Draw. play again!"
}

const playGame = (userChoice) =>{
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log(" Comp choice =", compChoice);

    if (userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true ;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ?false:true;
        }else if(userChoice === "paper"){
            compChoice === "scissors" ? false : true;
        }else{
            compChoice === "rock" ? false : true;        }
             showWinner(userWin,userChoice,compChoice);
    }
   

};
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
         const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
});