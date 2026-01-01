const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;
statusText.textContent = "Player X's turn";
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (box.textContent !== "" || !gameActive) return;

        box.textContent = currentPlayer;
        box.style.color = currentPlayer === "X" ? "red" : "blue";

        if (checkWinner()) {
            statusText.textContent = "Player " + currentPlayer + " Wins! 🎉";
            gameActive = false;
        } else if (isDraw()) {
            statusText.textContent = "It's a Draw 😐";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusText.textContent = "Player " + currentPlayer + "'s turn";
        }
    });
});

function highlightWinner(winningBoxes) {
    winningBoxes.forEach(index => {
        boxes[index].classList.add("winner");
    });
}


function checkWinner() {
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (
            boxes[a].textContent === currentPlayer &&
            boxes[b].textContent === currentPlayer &&
            boxes[c].textContent === currentPlayer
        ) {
            highlightWinner([a, b, c]);
            return true;
        }
    }
    return false;
}

function isDraw() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].textContent === "") {
            return false;
        }
    }
    return true;
}

resetBtn.addEventListener("click", function () {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
        boxes[i].classList.remove("winner");  // remove gold state
    }
    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = "Player X's turn";
});
