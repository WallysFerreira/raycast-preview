function isTileWall(x, y) {
  let column = Math.floor(x / TILE_SIZE);
  let row = Math.floor(y / TILE_SIZE);

  return grid.grid[row][column];
}
