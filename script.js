const container = document.getElementById("container");
const button = document.querySelector("button");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 960 / size;
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", function () {
  let userInput = prompt("Enter the number of squares per side (Maximum 100):");

  let gridSize = parseInt(userInput);

  if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
    createGrid(gridSize);
  } else {
    alert("Invalid input! Please enter a number between 1 and 100.");
  }
});
