const containerDiv = document.querySelector(".container");
const containerHeight = containerDiv.offsetHeight; //Total container height
const newGridButton = document.createElement("button");
const body = document.querySelector("body");

newGridButton.textContent = "New Grid";
newGridButton.setAttribute("style", "width: 10%; height: 10%; font-weight: bold; max-width: 100px;");

body.insertBefore(newGridButton, containerDiv);

newGridButton.addEventListener("click", () => {
    let askNumber = prompt("Enter a number for your new grid (not more than a 100!): ");
    let toInteger = Number(askNumber);
    const gridsToCreate = (toInteger * toInteger) + 1; 

    if (toInteger > 100) {
        return alert("That number is too large!");
    }

    do {
        containerDiv.removeChild(containerDiv.firstChild);
    } while (containerDiv.hasChildNodes()); //Removes grids from container 
    

    function createNewGrid() {

        for (let i = 1; i < gridsToCreate; i++) { // Create grid according to prompt
            const gridDiv = document.createElement("div"); //Individual grids
        
            const dividedHeightParts = (containerHeight / toInteger); //height divided into 16 parts
            const gridDivHeightPercentage = ((dividedHeightParts / containerHeight) * 100); //Get percentage each part needs 
        
            gridDiv.setAttribute("style", `border: 1px solid black; width: ${gridDivHeightPercentage}%; height: ${gridDivHeightPercentage}%; margin: 0; padding: 0;`);
        
            console.log(containerDiv);
        
            gridDiv.addEventListener("mouseover", () => { //Changes grid color if mouse hovers above
                gridDiv.style.backgroundColor = randomRGBValue();
            });
        
            containerDiv.appendChild(gridDiv);
        }
    }

    createNewGrid();
})

for (let i = 1; i < 257; i++) { // Create 16 x 16 grid
    const gridDiv = document.createElement("div"); //Individual grids

    const dividedHeightParts = (containerHeight / 16); //height divided into 16 parts
    const gridDivHeightPercentage = ((dividedHeightParts / containerHeight) * 100); //Get percentage each part needs 

    gridDiv.setAttribute("style", `border: 1px solid black; width: ${gridDivHeightPercentage}%; height: ${gridDivHeightPercentage}%; margin: 0; padding: 0;`);

    // console.log(containerDiv);

    gridDiv.addEventListener("mouseover", () => { //Changes grid color if mouse hovers above
        gridDiv.style.backgroundColor = randomRGBValue();
    });

    containerDiv.appendChild(gridDiv);
}



function randomRGBValue() {
    let randomR = Math.floor(Math.random() * 255); //Random red value
    let randomG = Math.floor(Math.random() * 255); //Random green value
    let randomB = Math.floor(Math.random() * 255); //Random blue value

    const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    return randomColor; 
}