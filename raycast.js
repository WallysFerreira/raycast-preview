const TILE_SIZE = 64;
const GRID_NUM_COLS = 15;
const GRID_NUM_ROWS = 11;

const WINDOW_HEIGHT = GRID_NUM_ROWS * TILE_SIZE;
const WINDOW_WIDTH = GRID_NUM_COLS * TILE_SIZE;

class Map {
  constructor() {
    this.grid = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  }

  render() {
    this.grid.forEach((col, rowIndex) => {
      col.forEach((tile, colIndex) => {
        var tileX = colIndex * TILE_SIZE
        var tileY = rowIndex * TILE_SIZE

        stroke("#333");
        fill(tile ? "#333" : "#fff");
        rect(tileX, tileY, TILE_SIZE, TILE_SIZE);
      })
    })
  }
}

class Player {
  constructor() {
    this.color = "#00f";
    this.radius = TILE_SIZE / 6;
  }

  render() {
    stroke(this.color);
    fill(this.color);
    circle(WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2, this.radius);
  }
}

var grid = new Map();
var player = new Player();

function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
}

function update() {
}

function draw() {
  update();

  grid.render();
  player.render();
}
