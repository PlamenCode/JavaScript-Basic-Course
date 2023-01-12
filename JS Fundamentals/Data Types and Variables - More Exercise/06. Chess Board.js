function chessBoard(num){
    for(let i = 1; i <= num; i++){
        if(i % 2 == 0){
            console.log(`
          <div>
            <span class="white"></span>
            <span class="black"></span>
            <span class="white"></span>
          </div>
        `)
        } else {
            console.log(`
<div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
`)
        }
    }
}
chessBoard(3)