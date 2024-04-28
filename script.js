const containerDiv = document.querySelector(".container");

const containerHeight = containerDiv.offsetHeight; //Total container height

for (let i = 1; i < 257; i++) { // Create 16 x 16 grid
    const gridDiv = document.createElement("div"); //Individual grids

    const dividedHeightParts = (containerHeight / 16); //height divided into 16 parts
    const gridDivHeightPercentage = ((dividedHeightParts / containerHeight) * 100); //Get percentage each part needs 

    gridDiv.setAttribute("style", `border: 5px solid black; width: ${gridDivHeightPercentage}%; height: ${gridDivHeightPercentage}%; margin: 0; padding: 0;`);

    console.log(containerDiv);

    if (i % 16 == 0) {
        gridDiv.setAttribute("style", `border: 5px solid black; width: ${gridDivHeightPercentage}%; height: ${gridDivHeightPercentage}%; background-color: red; margin: 0; padding: 0;`);
    }

    gridDiv.addEventListener("mouseover", () => { //Changes grid color if mouse hovers above
        gridDiv.style.backgroundColor = "blue";
    });

    containerDiv.appendChild(gridDiv);
}
