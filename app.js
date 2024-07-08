





function Game(){
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
    this.gameBoard = new GameBoard();
    this.player1turn = true;
    this.boxes = document.createElement("div");
    for (let k = 0; k < 9; k++){
        let div = document.createElement("div");
        this.boxes.append(div);
        div.addEventListener("click", (event)=>{
            handleInput(event);
        })
        div.style.cssText = "width : 200px; height : 200px; position : relative; background : transparent; border : 8px solid rgb(0,0,0);";
    }
    document.body.append(this.boxes);
    document.body.style.cssText = "height : 100vh; display : flex; justify-content : center; align-items : center; width : 100%;";
    this.boxes.style.cssText = "display : grid; grid-template-columns : repeat(3, 1fr); gap : 10px; grid-template-rows : repeat(3, 1fr);";
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

    this.handleInput = function(event){
        let index = Array.from(this.boxes).indexOf(event.target);
        let count = 0;
        for (let i = 0; i <= 2; i++){
            for (let j = 0; j <= 2; j++){
                if (count === index && this.gameBoard.gameBoard[i][j] === 0){
                    if (this.player1turn){
                        this.gameBoard.gameBoard[i][j] = 1;
                        this.player1turn = false;

                    }
                    else{
                        this.gameBoard.gameBoard[i][j] = 2;
                        this.player1turn = true;
                    }
                }
                
                count ++;
            }
        }

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







let game = new Game();
