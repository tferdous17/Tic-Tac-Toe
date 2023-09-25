const boardCells = document.querySelector('.board-wrapper').children;
const cellArr = Array.from(boardCells);

const gameBoard = (() => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
})();

const personFactory = (name) => {
  const play = () => {
    // placeholder
  }
  return {name, play};
}