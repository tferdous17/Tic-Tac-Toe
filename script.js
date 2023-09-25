const boardCells = document.querySelector('.board-wrapper').children;
const cellArr = Array.from(boardCells);

const gameBoard = (() => {
  const board = [false, false, false, 
                false, false, false,
                false, false, false];
  
  for (let i = 0; i < cellArr.length; i++) {
    cellArr[i].addEventListener('click', event => {
      if (board[i] == false) {
        cellArr[i].textContent = 'X';
        board[i] = true;
      } else {
        console.log('spot occupied');
      }
    board.forEach(x => console.log(x));
    });
  }
})();



const personFactory = (name) => {
  const play = () => {
    // placeholder
  }
  return {name, play};
}