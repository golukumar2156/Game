let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice"); 
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const genCompChoice =()=>
{
const options=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame = ()=>
{
msg.innerText="Game is Draw! Try Again:";
msg.style.backgroundColor ="#081b31";
};

const showWinner = (userWin,userChoice,CompChoice) =>
{
if(userWin===true)
{
   userScore++;
   userScorePara.innerText = userScore;
    msg.innerText=`you win! Your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor ="green";
}
else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText=`you lose!. ${userChoice} beats your ${CompChoice}`;
    msg.style.backgroundColor ="Red";
}
};
const playGame = (userChoice) =>
{
    // generate computer choice
    const CompChoice = genCompChoice();
   if(userChoice === CompChoice)
   {
    //Draw game
    drawGame();
   }
   else 
   {
    let userWin = true;
    if(userChoice === "rock"){
        //scissors,paper
        userWin = CompChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper")
    {
        // rock,scissors
        userWin = CompChoice === "scissors" ? false : true;
    }
     else{
        userWin = CompChoice === "rock" ? false : true;
     }
     showWinner(userWin ,userChoice,CompChoice);
   }
};

choices.forEach((choice) =>
{
    choice.addEventListener("click" ,()=>{
    const userChoice = choice.getAttribute("Id");
     playGame(userChoice);
    });
});