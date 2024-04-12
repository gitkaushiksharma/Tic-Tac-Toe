let boxes = document.querySelectorAll("#box");
// let resetbtn = document.querySelector("#reset");
let restartbtn = document.querySelector("#restart");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach( (box) => {
     
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "0";
            turn0 = false;
            
        }

        else{
            box.innerText = "X";
            turn0 = true;
        }
       
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count===9 && !isWinner){
            gameDraw();
        }
            
    });
     
    
});

const checkWinner = () => {
      
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
  };

  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msg.classList.remove("hide");
    disableBoxes();
  };

  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msg.classList.add("hide");
  };

  restartbtn.addEventListener("click",resetGame);
  
