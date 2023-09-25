const boardCells = document.querySelector('.board-wrapper').children;
const cellArr = Array.from(boardCells);

const gameBoard = (() => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  for (let i = 0; i < cellArr.length; i++) {
    cellArr[i].textContent = 'X';
  }
})();

const personFactory = (name) => {
  const play = () => {
    // placeholder
  }
  return {name, play};
}