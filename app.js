const main = document.querySelector("main");
document.querySelector("button").addEventListener("click", newGrid);
let boxAmount = 4;

createGrid();

function newGrid() {
    boxAmount = prompt("Enter grid size");

    if (boxAmount > 100) {
        alert("Enter a number below 100");
        return newGrid();
    }

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    createGrid();
    
}

function createGrid() {
    for (let i = 0; i < boxAmount * boxAmount; i++) {
        const block = document.createElement("div");
        block.style.width = `${960 / boxAmount}px`;
        block.style.height = `${960 / boxAmount}px`;
        block.addEventListener("mouseover", () => {
            block.classList.add("hovered")
        }); 
        main.appendChild(block);
    }
}