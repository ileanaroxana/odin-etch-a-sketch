createGrid(16);

function createGrid(size) {
  const container = document.querySelector("#container");
  container.textContent = "";
  reset();

  for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
          const square = document.createElement("div");
          square.classList.add("square");
          square.style.width = 960 / size + "px";
          square.style.height = 960 / size + "px";
          container.appendChild(square);

          square.addEventListener("mouseover", (e) => {
              square.style.backgroundColor = generateRandomColor();
          });
      }
  }
}

const btnOpacity = document.querySelector("#opacity");
btnOpacity.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      increaseOpacity(e);
    })
  });
});

const btnNew = document.querySelector("#new");
btnNew.addEventListener("click", () => {
    createGrid(getSize());
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    reset();
});
      

function reset() {
    const grid = document.querySelectorAll(".square");
    grid.forEach((cell) => {
        cell.style.backgroundColor = "";
    });
}

function getSize() {
    let size;
    
    do {
        const answer = prompt("How many squares per side? (max: 100)");
        if (answer == null) return;
        size = parseInt(answer);
        } while (size < 1 || size > 100 || !Number.isInteger(size));

    return size;
}

function generateRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}

function increaseOpacity(e) {
  if (!e.target.style.opacity)
    e.target.style.opacity = "0.1";

  if (e.target.style.opacity === "1")
    return;
  
  let opacity = parseFloat(e.target.style.opacity);
  e.target.style.opacity = opacity + 0.1;
}