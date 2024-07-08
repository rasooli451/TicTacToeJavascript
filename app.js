





function Game(){
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
    this.gameBoard = new GameBoard();
    this.player1 = true;
    this.dom = new DOM();
    this.Check = function(){
        for (let i = 0; i <=2; i++){
            let filled = -1;
            if (this.gameBoard.gameBoard[i][0] != 0){
                filled = this.gameBoard.gameBoard[i][0];
                if (i === 0 || i === 2){
                    if (i === 0){
                        if (this.gameBoard.gameBoard[1][1] === filled && this.gameBoard.gameBoard[2][2] === filled){
                            return filled;
                        }
                    }
                    if (i === 2){
                        if (this.gameBoard.gameBoard[1][1] === filled && this.gameBoard.gameBoard[0][2] === filled){
                            return filled;
                        }
                    }
                }
                if (this.gameBoard.gameBoard[i][1] === filled && this.gameBoard.gameBoard[i][2] === filled){
                        return filled;
                    }
                }
            }
        
        for (let j = 0; j <= 2; j++){
            let filled = -1;
            if (this.gameBoard.gameBoard[0][j] != 0){
                filled = this.gameBoard.gameBoard[0][j];
                if (this.gameBoard.gameBoard[1][j] === filled && this.gameBoard.gameBoard[2][j] === filled){
                    return filled;
                }
            }
        }
        return -1;        
}
}




function Player(name){
    this.name = name;
    this.setName = function(name){
        this.name = name;
    }
}



function GameBoard(){
    this.gameBoard = [[0,0,0],
                      [0,0,0],
                      [0,0,0]];
}



function DOM(){
    
}


let game = new Game();


console.log(game.Check());
