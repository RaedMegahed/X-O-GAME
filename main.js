// get all squares by class
const square = document.querySelectorAll(".square");
// get the title by id
const title = document.getElementById("title");
let turn = "x";
// function to write winner in title and reload the window and make squres backgroud black
function end(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} Winner`;
  document.getElementById("item" + num1).style.background = "#000";
  document.getElementById("item" + num2).style.background = "#000";
  document.getElementById("item" + num3).style.background = "#000";
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}
// function if there is a draw
function gameOver() {
  title.innerHTML = "GAME OVER";
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}
// get all squares by id and put them in array
let squares = [];
function winner() {
  // loop to get the inner html from all squares
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    end(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    end(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    end(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[4] != ""
  ) {
    end(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    end(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    end(3, 6, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    end(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    end(3, 5, 7);
  } else if (
    squares[1] != "" &&
    squares[2] != "" &&
    squares[3] != "" &&
    squares[4] != "" &&
    squares[5] != "" &&
    squares[6] != "" &&
    squares[7] != "" &&
    squares[8] != "" &&
    squares[9] != ""
  ) {
    gameOver();
  }
}

square.forEach((item) => {
  // when we click on squares and create x and o
  item.addEventListener("click", (eo) => {
    if (turn === "x" && item.innerHTML == "") {
      item.innerHTML = "X";
      turn = "o";
      title.innerHTML = "O";
    } else if (turn === "o" && item.innerHTML == "") {
      item.innerHTML = "O";
      turn = "x";
      title.innerHTML = "X";
    }
    winner();
  });
});
