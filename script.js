document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const gridSizeLabel = document.getElementById("gridSizeLabel");
    const gridSizeSlider = document.getElementById("gridSize");
    let gridSize = parseInt(gridSizeSlider.value);

    function createGrid(size) {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", colorSquare);
            square.addEventListener("mousedown", colorSquare);
            container.appendChild(square);
        }
    }

    function colorSquare(e) {
        if (e.buttons === 1 || e.type === "mousedown") {
            this.style.backgroundColor = "red";
        } else {
            this.style.backgroundColor = "blue";
        }
    }

    function clearGrid() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    gridSizeSlider.addEventListener("input", function () {
        gridSize = parseInt(this.value);
        gridSizeLabel.textContent = gridSize;
        clearGrid();
        createGrid(gridSize);
    });

    document.getElementById("clearGrid").addEventListener("click", function () {
        clearGrid();
        createGrid(gridSize);
    });

    createGrid(gridSize);
});
