const area = document.getElementById("area");
let move = 0;
let result;

let modalResultWrapper = document.getElementById("modal-result-wrapper");
let overlay = document.getElementById("overlay");
let modalWindow = document.getElementById("modal-window");
let content = document.getElementById("content");
let btnClose = document.getElementById("btn-close");

area.addEventListener("click", (e) => {
  if (e.target.className === "box") {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
    move++;
    e.target.style.pointerEvents = "none";
    check();
  }
});

const check = () => {
  const boxes = document.getElementsByClassName("box");
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML === "X" &&
      boxes[arr[i][1]].innerHTML === "X" &&
      boxes[arr[i][2]].innerHTML === "X"
    ) {
      result = "крестики";
      prepareResult(result);
    } else if (
      boxes[arr[i][0]].innerHTML === "O" &&
      boxes[arr[i][1]].innerHTML === "O" &&
      boxes[arr[i][2]].innerHTML === "O"
    ) {
      result = "нолики";
      prepareResult(result);
    }
  }
  if (move === 9) {
    prepareResult(result);
  }
};

const prepareResult = (winner = "ничья") => {
  winner === "ничья"
    ? (content.innerHTML = ` ${winner}`)
    : (content.innerHTML = `Победили ${winner}`);
  modalResultWrapper.style.display = "block";
};

const newGame = () => {
  modalResultWrapper.style.display = "none";
  location.reload();
};

btnClose.addEventListener("click", newGame);

//012
//345
//678
