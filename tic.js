let btn = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let turn0 = true;

let NewGameBtn = document.querySelector(".new-btn");
let MsgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let winptrn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turn0 = true;
  enableBtn();
  MsgContainer.classList.add("hide");
};
btn.forEach((box) => {
  box.addEventListener("click", () => {
    // alert("click me");
    if (turn0) {
      box.innerText = "0";
      box.style.color = "green";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "yellow";

      turn0 = true;
    }
    box.disabled = true;
    cheackWinner();
  });
});

let disbleBtn = () => {
  for (let boxx of btn) {
    boxx.disabled = true;
    // boxx.innerText = "";
  }
};

let enableBtn = () => {
  for (let boxx of btn) {
    boxx.disabled = false;
    boxx.innerText = "";
  }
};

let showWinner = (text) => {
  msg.innerText = `winner is ${text}`;
  MsgContainer.classList.remove("hide");
  disbleBtn();
};

const cheackWinner = () => {
  for (let pattern of winptrn) {
    // console.log(pattern[0], pattern[1], pattern[2]);

    let pos1Val = btn[pattern[0]].innerText;
    let pos2Val = btn[pattern[1]].innerText;
    let pos3Val = btn[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log(`winner ${pos1Val}`);
        showWinner(pos1Val);
      }
    }
  }
};
NewGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
