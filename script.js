const newGridButton = document.createElement("button");
newGridButton.classList.add("newGridButton");
newGridButton.textContent = "Create new grid";
document.body.appendChild(newGridButton);
const gridSize = 512;



newGridButton.addEventListener("click", function(e){
    do{
        newGridSize = prompt("Enter new grid size (must be below 100)");
    }while(newGridSize > 100)
    
    createGrid(newGridSize);
    squares = Array.from(document.getElementsByClassName("square"))
    squares.forEach(square => square.addEventListener("mouseover", function(e){
        
        square.style = "height : " + gridSize /newGridSize + "px ; width : " + gridSize / newGridSize + "px; background-color : " + "rgb(" + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ")";
}))



})

function createGrid(size){
    lines = Array.from(document.getElementsByClassName("line"));
    for(let i = 0; i < lines.length; i++){
        document.body.removeChild(lines[i]);
    }

    for(let i = 0; i < size; i++){
        const line = document.createElement("div");
        line.classList.add("line");
        document.body.appendChild(line);
        for(let j = 0; j < size; j++){
            const div = document.createElement("div");
            div.classList.add("square");
            div.style = "height : " + gridSize /size + "px ; width : " + gridSize / size + "px";

            line.appendChild(div);
        }
    }
}