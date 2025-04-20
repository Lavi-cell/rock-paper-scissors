let computer=0;
let player=0;
const result = document.querySelector(".result");
// const player = document.querySelector("#player");
// const computer = document.querySelector("#computer");
function play(choice){
    const option=["rock","paper","scissors"];
    const compchoice=option[Math.floor(Math.random()*3)];
    if(choice===compchoice){
        result.innerText="ITS A DRAW !"
    }
    else if((choice==="rock"&& compchoice==="scissors"||
            choice==="paper"&& compchoice==="rock"||
            choice==="scissors"&& compchoice==="paper"))
            {
                result.innerText="YOU WON !";
                player++;
                document.getElementById("player").innerText = player;
    }
    else{
        result.innerText="YOU LOST !";
        computer++;
        document.getElementById("computer").innerText = computer;
    }  
    if(player===5||computer===5){
        if(player===5){
        result.innerText="👑FLAWLESS VICTORY! YOU ARE UNSTOPPABLE!😎"
        }
        else if(computer===5){
            result.innerText="🤖 MISSION FAILED. I WIN THIS ROUND. 💥"
        }
        setTimeout(()=>{
            result.innerText="NEW GAME !"
            player=0;
            computer=0;
            document.getElementById("player").innerText = player;
            document.getElementById("computer").innerText = computer;
        },5000);}
}
