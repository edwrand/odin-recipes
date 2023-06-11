document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    let gridSize = 16; // Initial grid size

    function createGrid(size) {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }

    function clearGrid() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    document.getElementById("newGrid").addEventListener("click", function () {
        let newSize = prompt("Enter new grid size (up to 100):");
        if (newSize !== null) {
            newSize = Math.min(newSize, 100); // Limit size to 100
            clearGrid();
            createGrid(newSize);
        }
    });

    createGrid(gridSize); // Create initial grid
});
