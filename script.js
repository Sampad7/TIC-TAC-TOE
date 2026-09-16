let boxs=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let turnO = true; 
let userlogin1=document.querySelector(".username1");
let userlogin2=document.querySelector(".username2");
let game=document.querySelector(".game");
userlogin1.addEventListener("keydown",(e) =>{
    if(e.key=="Enter"){
        game.style.display="flex";
        userlogin1.style.display="none";
    }
});
userlogin2.addEventListener("keydown",(e) =>{
    if(e.key=="Enter"){
        game.style.display="flex";
        userlogin2.style.display="none";
    }
});

const win1=()  => {
    alert(userlogin1.value + " wins ");
    for (const box of boxs) {
        box.disabled=true;
    }
}
const win2=()  => {
    alert(userlogin2.value + " wins ");
    for (const box of boxs) {
        box.disabled=true;
    }
}
const resetGame = () => {
    boxs.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
        turnO = true;
    });
};

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxs.forEach((box) => {
     box.addEventListener("click", () => {
       
        if (turnO==true) {
            box.innerHTML = "O";
            turnO=false;
        }
        else{
            box.innerHTML = "X";
            turnO=true;
        }
        box.disabled=true;
        winner();
     })
})
const winner = () => {
    for ( pattern of winPatterns) {
        let p1 = boxs[pattern[0]].innerHTML;
        let p2 = boxs[pattern[1]].innerHTML;
        let p3 = boxs[pattern[2]].innerHTML;
        if (p1 != "" && p1 == p2 && p2 == p3) {
           if (p1=="O" && p2=="O" && p3=="O") {
            win1();
           }
           else if (p1=="X" && p2=="X" && p3=="X") {
            win2();
           }
        }
    }
}
reset.addEventListener('click', () => {
    resetGame();
});