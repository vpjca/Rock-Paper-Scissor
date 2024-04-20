let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let comp=document.querySelector("#computer-score");
let user=document.querySelector("#user-score");
const drawGame=()=>{
    console.log("the choice is a draw");
    msg.innerText="it's a Draw";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        console.log("You win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        userScore=userScore+1;
        user.innerText=userScore;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        msg.innerText=`You lose! ${compChoice} beats Your ${userChoice}`
        compScore=compScore+1;
        comp.innerText=compScore;
        msg.style.backgroundColor="red";

    }
}
//computer choice genaeration
const genCompScore=()=>{
    let options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3)//this will giva a random integer between 0 and 2
    return options[idx];
}
let choices=document.querySelectorAll(".choice");
const playGame= (userChoice)=>{
    console.log("user choice is ",userChoice);
    //computer choice
    let compChoice=genCompScore();
    console.log("Computer choice is ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="paper"){
            //computer can select either rock or scissor
            userWin= compChoice==="scissors"?false:true;
        }
        else if(userChoice==="rock"){
            userWin= compChoice==="paper"?false:true;
        }
        else{
            //userChoice scissor comp=paperr,rock
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
    }

}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
