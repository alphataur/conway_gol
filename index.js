function randomInt(){
  return Math.round(Math.random())
}
function createDiv(value, root){
  let div = document.createElement("div")
  //div.innerHTML = value
  div.classList.add("box")
  if(value === 1)
    div.classList.add("green")
  else
    div.classList.add("red")
  root.appendChild(div)
}

function drawBoard(board){
  let m = board.length
  let n = board[0].length
  var fillColor;
  for(let i = 0; i< m; i++){
    for(let j = 0; j < n; j++){
      if(board[i][j] === 1)
        createDiv(1, document.querySelector("#canvas"))
      else
        createDiv(0, document.querySelector("#canvas"))
    }
  }
  //let m = board.length
  //let n = board[0].length
  //var fillColor;
  //for(let i = 0; i < m; i++){
  //  for(let j = 0; j < n; j++){
  //    ctx.beginPath()
  //    if(board[i][j] === 1)
  //      fillColor = "green"
  //    else
  //      fillColor = "red"
  //    ctx.beginPath()
  //    console.log(blockSize, i, j)
  //    ctx.fillRect(i*blockSize, j*blockSize, blockSize, blockSize, fillColor)
  //  }
  //}
}
function fillRandomBoard(board){
  console.log("filling randoms is my job")
  let m = board.length
  let n = board[0].length
  console.log(m, n)
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      board[i][j] = randomInt()
      //console.log(board[i][j])
    }
  }
}
window.onload = function(){
  //let canvas = document.querySelector("#canvas")
  //let ctx = canvas.getContext("2d")
  //console.log(canvas)
  let height = 190 //canvas.offsetHeight  //in px
  let width = 100 //canvas.offsetWidth    // in px
  let blockSize = 10
  let board = new Array(height/blockSize)
  for(let i = 0; i < height; i++){
    board[i] = new Array(width/blockSize)
  }
  fillRandomBoard(board)
  drawBoard(board)
  console.log("board initialized")
  //console.log(board)
}

