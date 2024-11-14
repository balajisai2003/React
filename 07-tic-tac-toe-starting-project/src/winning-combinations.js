export const WINNING_COMBINATIONS = [
    // Horizontal wins
    [{row:0,col:0},{row:0,col:1},{row:0,col:2}],
    [{row:1,col:0},{row:1,col:1},{row:1,col:2}],
    [{row:2,col:0},{row:2,col:1},{row:2,col:2}],
    // Vertical wins
    [{row:0,col:0},{row:1,col:0},{row:2,col:0}],
    [{row:0,col:1},{row:1,col:1},{row:2,col:1}],
    [{row:0,col:2},{row:1,col:2},{row:2,col:2}],
    // Diagonal wins
    [{row:0,col:0},{row:1,col:1},{row:2,col:2}],
    [{row:0,col:2},{row:1,col:1},{row:2,col:0}]
  ];