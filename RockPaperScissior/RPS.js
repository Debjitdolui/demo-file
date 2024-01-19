let userScore = 0;
let comScore = 0;
const userScorePara = document.querySelector("#user-score")
const comScorepara =document.querySelector("#com-score");
const msg =document.querySelector("#msg");
//showing Winner
const showWinner =( userWin,userChoice,comChoice)=> {
       if(userWin){
        userScore++;
        console.log("You win");
        msg.innerText=`You Win. Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor ="green";
        userScorePara.innerText= userScore;
       }
       else{
        comScore++;
        console.log("You lose");
        msg.innerText=`You Lose. ${comChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
        comScorepara.innerText= comScore;
       }
};

//draw game condition
const drawGame = () =>{
    console.log("game was draw");
    msg.innerText="Game Was Draw .Play Again";
}
//Generate computer choice 

const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIx = Math.floor(Math.random()*3);
    return options[randIx];
}
const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    const  comChoice= genCompChoice();
    console.log("com choice =",comChoice);

    if(userChoice === comChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            //scissor,paper
            userWin = comChoice ==="paper" ?false:true;
        }
        else if(userChoice ==="scissor"){
            //rock,paper
            userWin = comChoice ==="paper" ?true:false;
        }
        else{
            //scissor,rock
            userWin = comChoice ==="rock" ?true:false;
        }
        showWinner(userWin,userChoice,comChoice);
    }

    
}
const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});