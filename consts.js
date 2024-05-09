const TILE_SIZE = localStorage.getItem("tileSize");
const GRID_NUM_COLS = localStorage.getItem("colsQnt");
const GRID_NUM_ROWS = localStorage.getItem("rowsQnt");
const PLAYER_SPEED = TILE_SIZE / 30;
const WINDOW_HEIGHT = GRID_NUM_ROWS * TILE_SIZE;
const WINDOW_WIDTH = GRID_NUM_COLS * TILE_SIZE;
