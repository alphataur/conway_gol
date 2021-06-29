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
function getNewGrid(m, n){
  let board = new Array(m)
  for(let i = 0; i < m; i++){
    board[i] = new Array(n)
  }
  return board
}
function checkBounds(abscissa, ordinate, m, n){
  return (abscissa >= 0 && abscissa < m) && (ordinate >= 0 && ordinate < n)
}

function getNeighbors(abscissa, ordinate, m, n, board){
  let neighbors = []
  for(let i of [-1, 0, 1]){
    for(let j of [-1, 0, 1]){
      if((i == 0 && j == 0) || (!checkBounds(abscissa+i, ordinate+j, m, n))) continue
      neighbors.push([abscissa+i, ordinate+j])
    }
  }
  return neighbors
}
function genGen(board){
  let m = board.length
  let n = board[0].length
  let next = getNewGrid(m, n)
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      let neighbors = getNeighbors(i,j,m,n,board)
      let aod = neighbors.reduce((a, e)=>{
        if(board[e[0]][e[1]])
          return a+1
        else
          return a
      }, 0)
      console.log("neighbors", aod)
      if( (board[i][j] === 0) && (aod === 3) ) next[i][j] = 1    //coming back to life; reproduction
      else if( (board[i][j] === 1) && (aod > 3)) next[i][j] = 0  //going back to being dead; overpopulation
      else if( (board[i][j] == 1) && ((aod >= 2) && (aod <= 3))) continue //imma not gonna change; statis
      else if( (board[i][j] == 1) && (aod < 2) ) next[i][j] = 0 //i'm so lonely; underpopulation
      else continue //console.log("broken logic at", next[i][j], "with", aod, "neighbors;", "neighborList", neighbors)
    }
  }
  return next
}
function fillRandomBoard(board){
  console.log(board)
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
function clearBoard(){
  for(let i of document.querySelectorAll(".box")){
    i.remove()
  }
}

window.onload = function(){
  //let canvas = document.querySelector("#canvas")
  //let ctx = canvas.getContext("2d")
  //console.log(canvas)
  let height = 1900 //canvas.offsetHeight  //in px
  let width = 1000 //canvas.offsetWidth    // in px
  let blockSize = 10
  let board = getNewGrid(height/blockSize, width/blockSize)
  //let board = new Array(height/blockSize)
  //for(let i = 0; i < height; i++){
  //  board[i] = new Array(width/blockSize)
  //}
  fillRandomBoard(board)
  drawBoard(board)
  console.log("board initialized")
  setInterval(()=>{
    let next = genGen(board)

    //let nextGen = getNewGrid(height/blockSize, width/blockSize)
    //fillRandomBoard(nextGen)
    
    //console.log(genGen(nextGen))
    clearBoard()
    drawBoard(next)
    board = next
  },2000)
  //while(true){
  //  let nextGen = genGen(board)
  //  drawBoard(nextGen)
  //}
  //console.log(board)
}

