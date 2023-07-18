class TicTacTie{
  
  turn = 'X';
  checkboxes = {
    'X': [],
    'O': [],
  };

  winningPattern = [
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [3,5,7],
    [3,6,9],
    [4,5,6],
    [7,8,9]
  ]

  constructor(){
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
      cell.addEventListener('click',((e)=> {
        if(e.target.innerHTML === ''){
          e.target.innerHTML = this.turn;
          this.checkboxes[this.turn].push(parseInt(e.target.attributes['data-index'].value));
          this.checkWin(() => this.changeTurn());
        }
      }))
    }
  }

  changeTurn(){
    this.turn = this.turn == 'X' ? 'O' : 'X';
  }
  clearTurn(){
    this.checkboxes={
      'X': [],
      'O': [],
    };
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
      cell.innerHTML = '';
    }
  }

  checkWin(callback){
    const checks = this.checkboxes[this.turn];
    
    for (const pattern of this.winningPattern) {
      if(pattern.every(p => checks.includes(p))){
        setTimeout(() =>{ 
          alert(this.turn+' Wins'),
          this.clearTurn()
        }, 200)
        return true;
      }
    }
    if(checks.length == 5){
      setTimeout(() =>{ 
        alert('Match draw')
        this.clearTurn()
      },200)
    }else{
      callback();
    }
    return false;
  }
}

new TicTacTie();