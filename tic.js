let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#newgm");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");


let turnx = true;

const gamepattern = [[0,1,2],
[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
// reset game
// enable box
const enablebx = ()=>{for (box of boxes){box.disabled=false;
    box.innerText="";
}};


const resetGame =()=>{
    turnx=true;
    enablebx();
    msgcontainer.classList.add("hide");
}

boxes.forEach(
    (box)=>{
        box.addEventListener("click",()=>{
            if(turnx === true){box.innerText = "X";
                turnx = false;}
                else{box.innerText="O";
                    turnx=true;

                }
                box.disabled=true;
                
                checkwinner();



                // check winner 

              
            
        });
    }
);
// show winning msg
const disblbx = ()=>{for (box of boxes){box.disabled=true;}};
const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is player ${winner}`;
    msgcontainer.classList.remove("hide");
    disblbx();
}

const checkwinner =()=>{
    for(let pattern of gamepattern ){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
               console.log("winner is player", pos1);
                showwinner(pos1);
            }
        }
    }
        
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
setTimeout(()=>{
    document.getElementById("bgaudi").play();
},1000);
