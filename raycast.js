const TILE_SIZE = 64;
const GRID_NUM_COLS = 15;
const GRID_NUM_ROWS = 11;
const PLAYER_SPEED = 2;

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
    this.x = WINDOW_WIDTH / 2;
    this.y = WINDOW_HEIGHT / 2;
    this.walkingDirection = 0; // -1 backwards, 1 frontwards
    this.facingDirection = 0; // -1 clockwise, 1 counter-clockwise
    this.facingAngle = Math.PI / 2;
    this.rotationSpeed = 3 * (Math.PI / 180);
  }

  render() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius);

    stroke(this.color);
    line(
      this.x,
      this.y,
      this.x + Math.cos(this.facingAngle) * 3 * this.radius,
      this.y + Math.sin(this.facingAngle) * 3 * this.radius,
    )
  }

  update() {
    this.facingAngle += this.rotationSpeed * this.facingDirection;

    let xAngleMultiplier = Math.cos(this.facingAngle) < 0 ? -1 : 1;
    let yAngleMultiplier = Math.sin(this.facingAngle) < 0 ? -1 : 1;
    let nextX = this.x + this.radius * xAngleMultiplier;
    let nextY = this.y + this.radius * yAngleMultiplier;

    if (!isTileWall(nextX, nextY)) {
      this.x += PLAYER_SPEED * this.walkingDirection * cos(this.facingAngle);
      this.y += PLAYER_SPEED * this.walkingDirection * sin(this.facingAngle);
    }
  }
}

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

function keyPressed() {
  // Pressing W or arrow up
  if (keyCode == 87 || keyCode == 38) {
    player.walkingDirection = 1;
  }

  // Pressing S or arrow down
  if (keyCode == 83 || keyCode == 40) {
    player.walkingDirection = -1;
  }

  // Pressing A or arrow left
  if (keyCode == 65 || keyCode == 37) {
    player.facingDirection = -1;
  }

  // Pressing D or arrow right
  if (keyCode == 68 || keyCode == 39) {
    player.facingDirection = 1;
  }
}

function keyReleased() {
  if (keyCode == 87 || keyCode == 38) {
    player.walkingDirection = 0;
  }

  if (keyCode == 83 || keyCode == 40) {
    player.walkingDirection = 0;
  }

  if (keyCode == 65 || keyCode == 37) {
    player.facingDirection = 0;
  }

  if (keyCode == 68 || keyCode == 39) {
    player.facingDirection = 0;
  }
}

function update() {
  player.update();
}

function draw() {
  update();

  grid.render();
  player.render();
}
