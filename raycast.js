function isTileWall(x, y) {
  let column = Math.floor(x / TILE_SIZE);
  let row = Math.floor(y / TILE_SIZE);

  return grid.grid[row][column];
}

var grid = new Map();
var player = new Player();

function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
}

function update() {
  player.update();
}

function draw() {
  update();

  grid.render();
  player.render();
}
