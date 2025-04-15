let boxes= document.querySelectorAll(".btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let reset =document.querySelector(".Reset");
let newgame=document.querySelector(".newgame");
let turnO=true;

let winPropability=[
                    [0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]
                   ]
boxes.forEach((box) =>{
    
    box.addEventListener("click",()=>{
            if(turnO){
                turnO=false;
                box.innerText="O";
            }else{
                turnO=true;
                box.innerText="X";
            }
            box.disabled=true;
            winnerFun();
        })
        
    
});

let winnerFun=()=>{
    for(let pattern of winPropability){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
   
    if(pos1Val !=""&& pos2Val !=""&& pos3val !=""){
        if(pos1Val==pos2Val&& pos2Val==pos3val){
            console.log(pos2Val + " is  Winner ");
            showWinner(pos1Val);
        }
    }
}
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations ${winner} is Winner`;
    msgcontainer.classList.remove("hide");
    disablesFun();
}

const disablesFun=()=>{
    for(let box of boxes){
    box.disabled=true;        
}
}

const enabledFun=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enabledFun();
    msgcontainer.classList.add("hide");

}

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);