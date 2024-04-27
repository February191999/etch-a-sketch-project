const containerDiv = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.style.cssText = "border: 5px solid black; width: 50px; height: 50px;";
    containerDiv.appendChild(gridDiv);
}