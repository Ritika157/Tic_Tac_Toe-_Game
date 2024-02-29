let boxes=document.querySelectorAll(".box1");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let drawmsg=document.querySelector("#draw");
let turn0 = true;//playerX,player0
let count=0;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
 
const resetGame =() =>{
    turn0 = true;
    count=0;
    enabledboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box1) => {
    box1.addEventListener("click",() => {
        // console.log("box was clicked");
        if(turn0){//player0
            box1.innerText="0";
            turn0=false;
        }
        else{
            box1.innerText="X";
            turn0=true;
        }
        box1.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count ===9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
  };

const disabledboxes=() =>{
    for(let box1 of boxes){
        box1.disabled = true;
    }
};
const enabledboxes=() =>{
    for(let box1 of boxes){
        box1.disabled = false;
        box1.innerText="";
    }
};
const showWinner=(winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
}

const checkWinner= () =>{
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!= "" && pos3val!=""){
           if(pos1val ===pos2val && pos2val===pos3val){
                // console.log("winner",pos1val);
                showWinner(pos1val);
          }
        }
    }
};
// const drawer=() =>{
//     for(let pattern of winPatterns){
//         if(pos1val!="" && pos2val!= "" && pos3val!=""){
//             if(pos1val != pos2val && pos2val!=pos3val){
//                 drawer(pos1val);
//     }
// }
// }
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


