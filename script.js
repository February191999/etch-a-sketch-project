const containerDiv = document.querySelector(".container");

const containerHeight = containerDiv.offsetHeight;

for (let i = 1; i < 257; i++) { // Create 16 x 16 grid
    const gridDiv = document.createElement("div");

    // const dividedWidthParts = (containerWidth / 16);
    // const gridDivWidthPercentage = (((dividedWidthParts / containerWidth) * 100) / (16 / 9));

    const dividedHeightParts = (containerHeight / 16);
    const gridDivHeightPercentage = ((dividedHeightParts / containerHeight) * 100);

    console.log(gridDivHeightPercentage);
    gridDiv.setAttribute("style", `border: 5px solid black; width: ${gridDivHeightPercentage}%; height: ${gridDivHeightPercentage}%; margin: 0; padding: 0;`);

    console.log(containerDiv);

    if (i % 16 == 0) {
        gridDiv.setAttribute("style", `border: 5px solid black; width: ${gridDivHeightPercentage}%; height: ${gridDivHeightPercentage}%; background-color: red; margin: 0; padding: 0;`);
    }

    containerDiv.appendChild(gridDiv);
}