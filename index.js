function randomInt(){
  return Math.round(Math.random())
}
function fillRandomBoard(board){
  console.log("filling randoms is my job")
  let m = board.length
  let n = board[0].length
  console.log(m, n)
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      board[i][j] = randomInt()
      console.log(board[i][j])
    }
  }
}
window.onload = function(){
  let canvas = document.querySelector("#canvas")
  console.log(canvas)
  let height = 1900 //canvas.offsetHeight  //in px
  let width = 1000 //canvas.offsetWidth    // in px
  let blockSize = 20
  let board = new Array(height/blockSize)
  for(let i = 0; i < height; i++){
    board[i] = new Array(width/blockSize)
  }
  fillRandomBoard(board)
  console.log(board)
}

