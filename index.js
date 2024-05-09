document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        document.getElementById("tileSize").addEventListener("change", updateCanvas);
        document.getElementById("rowsQnt").addEventListener("change", updateCanvas);
        document.getElementById("colsQnt").addEventListener("change", updateCanvas);
        /*
        document.getElementById("generateButton").addEventListener("click", (e) => {
            window.location.href("preview.html");
        });
        */
    }
}

let grid = []

for (let i = 0; i < 11; i++) {
    grid[i] = [];

    for (let j = 0; j < 15; j++) {
        grid[i][j] = i == 0 || i == 10 || j == 0 || j == 14 ? 1 : 0;
    }
}

function setup() {
    createCanvas(32 * 15, 32 * 11);
}

function draw() {
    let tileSize = document.getElementById("tileSize").value;

    grid.forEach((col, rowIndex) => {
        col.forEach((tile, colIndex) => {
            fill(tile ? "#000" : "#fff");
            rect(colIndex * tileSize, rowIndex * tileSize, tileSize, tileSize);
        })
    })
}

function updateCanvas(e) {
    let tileSize = document.getElementById("tileSize").value;
    let rowsQnt = document.getElementById("rowsQnt").value;
    let colsQnt = document.getElementById("colsQnt").value;

    console.log(e);

    if (e.srcElement.id == "rowsQnt" || e.srcElement.id == "colsQnt") {
        updateGrid(colsQnt, rowsQnt);
    }

    resizeCanvas(colsQnt * tileSize, rowsQnt * tileSize);
    localStorage.setItem("tileSize", tileSize);
    localStorage.setItem("rowsQnt", rowsQnt);
    localStorage.setItem("colsQnt", colsQnt);
}

function updateGrid(colsQnt, rowsQnt) {
    grid = [];

    for (let i = 0; i < rowsQnt; i++) {
        grid[i] = [];

        for (let j = 0; j < colsQnt; j++) {
            grid[i][j] = i == 0 || i == rowsQnt - 1 || j == 0 || j == colsQnt - 1 ? 1 : 0;
        }
    }

    localStorage.setItem('grid', JSON.stringify(grid));
}

function mouseClicked() {
    let tileSize = document.getElementById("tileSize").value;
    let gridX = Math.floor(mouseX / tileSize);
    let gridY = Math.floor(mouseY / tileSize);

    grid[gridY][gridX] = grid[gridY][gridX] == 0 ? 1 : 0;
    localStorage.setItem('grid', JSON.stringify(grid));
}