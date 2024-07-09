





function Game(player1, player2){
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
    this.gameBoard = new GameBoard();
    this.player1turn = true;
    this.boxes = document.createElement("div");
    this.sound = new Audio("clicksound.mp3");
    for (let k = 0; k < 9; k++){
        let div = document.createElement("div");
        this.boxes.append(div);
        div.style.cssText = "width : 200px; height : 200px; position : relative; background : transparent; border : 8px solid rgb(0,0,0);";
        div.addEventListener("click", (event)=>{
            this.handleInput(event);
        })
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
        let index = Array.from(this.boxes.children).indexOf(event.target);
        let count = 0;
        for (let i = 0; i <= 2; i++){
            for (let j = 0; j <= 2; j++){
                if (count === index && this.gameBoard.gameBoard[i][j] === 0){
                    this.sound.play();
                    if (this.player1turn){
                        this.gameBoard.gameBoard[i][j] = 1;
                        this.player1turn = false;
                        let span1 = document.createElement("span");
                        let span2 = document.createElement("span");
                        event.target.append(span1);
                        event.target.append(span2);
                        span1.style.cssText = "position : absolute; width : 100%; height : 30px; left : -3px; top : 80px; transform : rotate(45deg); background-color : #000;";
                        span2.style.cssText = "position : absolute; width : 100%; height : 30px; right : -3px; top : 80px; transform : rotate(-45deg); background-color : #000;";
                    }
                    else{
                        this.gameBoard.gameBoard[i][j] = 2;
                        this.player1turn = true;
                        let div = document.createElement("div");
                        event.target.append(div);
                        div.style.cssText = "position : absolute; width : 60%; height : 60%; border-radius : 50%; background-color : transparent; border : 30px solid rgba(255,255,255, 0.4); left : 10px; top : 10px;"
                    }
                }
                count ++;
            }
        }

    }

    this.reset = function(){
        this.player1turn = true;
        this.gameBoard = new GameBoard();
        for (let i = 0; i < 9; i++){
            this.boxes.children[i].innerHTML = "";
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




const main = document.querySelector(".wlcme");

const form = document.querySelector(".wlcme form");

const p1name = document.querySelector("#POne");

const p2name = document.querySelector("#Ptwo");

const btn = document.querySelector("form button");


btn.addEventListener("click", ()=>{
    main.classList.add("hidden");
})

