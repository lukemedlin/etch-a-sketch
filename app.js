const main = document.querySelector("main");


let boxAmount = 10;


for (let i = 0; i < boxAmount * boxAmount; i++) {
    const block = document.createElement("div");
    block.style.width = `${960 / boxAmount}px`;
    block.style.height = `${960 / boxAmount}px`;
    block.addEventListener("mouseover", () => {
        block.classList.add("hovered")
    }); 
    main.appendChild(block);

}

