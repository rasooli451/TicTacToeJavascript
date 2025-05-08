





function Game(player1, player2){
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.gameBoard = new GameBoard();
    this.player1turn = true;
    this.namecont = document.createElement("div");
    this.player1name = document.createElement("p");
    this.player2name = document.createElement("p");
    this.player1name.innerHTML = this.player1.name;
    this.player2name.innerHTML = this.player2.name;
    document.body.append(this.namecont);
    this.namecont.append(this.player1name);
    this.namecont.append(this.player2name);
    this.namecont.style.cssText = "display : flex; justify-content : space-around;  align-items : flex-start;width : 100%; font-size : 30px; padding : 3rem 0; position : fixed; top : 0; color : #fff;";
    this.checkbox = document.createElement("input");
    this.checkbox.setAttribute("type", "checkbox");
    this.checkbox.checked = true;
    this.player1name.append(this.checkbox);
    this.changecheckbox = function(){
    if (this.player1turn){
        this.player1name.append(this.checkbox);
        if (Array.from(this.player2name.children).indexOf(this.checkbox) != -1){
            this.player2name.removeChild(this.checkbox);
        }
    }
    else{
        this.player2name.append(this.checkbox);
        if (Array.from(this.player1name.children).indexOf(this.checkbox) != -1){
            this.player1name.removeChild(this.checkbox);
        }
    }
}
    this.boxes = document.createElement("div");
    this.sound = new Audio("clicksound.mp3");
    for (let k = 0; k < 9; k++){
        let div = document.createElement("div");
        this.boxes.append(div);
        div.style.cssText = "position : relative; background : transparent; border : 8px solid rgb(0,0,0);";
        div.addEventListener("click", (event)=>{
            this.handleInput(event);
        })
    }
    document.body.append(this.boxes);
    document.body.style.cssText = "height : 100vh; display : flex; justify-content : center; align-items : center; width : 100%; flex-direction : column;";
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
                        this.changecheckbox();
                        let span1 = document.createElement("span");
                        let span2 = document.createElement("span");
                        event.target.append(span1);
                        event.target.append(span2);
                        span1.style.cssText = "position : absolute; width : 100%; height : 30px; left : -3px; top : 80px; transform : rotate(45deg); background-color : #000; z-index : -1;";
                        span2.style.cssText = "position : absolute; width : 100%; height : 30px; right : -3px; top : 80px; transform : rotate(-45deg); background-color : #000; z-index : -1;";
                    }
                    else{
                        this.gameBoard.gameBoard[i][j] = 2;
                        this.player1turn = true;
                        this.changecheckbox();
                        let div = document.createElement("div");
                        event.target.append(div);
                        div.style.cssText = "position : absolute; width : 60%; height : 60%; border-radius : 50%; background-color : transparent; border : 30px solid rgba(255,255,255, 0.4); left : 10px; top : 10px; z-index : -1;"
                    }
                }
                count ++;
            }
        }
        let res = this.Check();
        if (res != -1){
            ShowResult(res);
        }
    }

    this.reset = function(){
        this.player1turn = true;
        this.gameBoard = new GameBoard();
        for (let i = 0; i < 9; i++){
            this.boxes.children[i].innerHTML = "";
        }
        if (Array.from(this.player2name.children).indexOf(this.checkbox) != -1){
            this.player2name.removeChild(this.checkbox);
        }
        if (Array.from(this.player1name.children).indexOf(this.checkbox) === -1){
            this.player1name.append(this.checkbox);
        }
    }

}




function Player(name){
    this.name = name;
    this.score = 0;
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

let game = null;

const resscreen = document.querySelector(".resultscreen");

const announcement = document.querySelector(".announceresult");

const p1score = document.querySelector(".player1sc");

const p2score = document.querySelector(".player2sc");

const again = document.querySelector(".again");

const restart = document.querySelector(".Restart");

btn.addEventListener("click", (event)=>{
    event.preventDefault();
    main.classList.add("hidden");
    if (p1name.value.length > 0 && p2name.value.length > 0){
            game = new Game(p1name.value, p2name.value);
    }
    else{
        game = new Game("Player 1", "Player 2");
    }
})

again.addEventListener("click", ()=>{
    resscreen.classList.add("hide");    
    game.reset();
})

restart.addEventListener("click", ()=>{
    resscreen.classList.add("hide");
    main.classList.remove("hidden");
    document.body.removeChild(game.namecont);
    document.body.removeChild(game.boxes);
})

function ShowResult(result){
    resscreen.classList.remove("hide");
    if (result === 1){
        announcement.innerHTML = game.player1.name + " Won!!!";
        game.player1.score ++;
    }
    else{
        announcement.innerHTML = game.player2.name + " Won!!!";
        game.player2.score ++;
    }
    p1score.innerHTML = game.player1.name + "'s score: " + game.player1.score;
    p2score.innerHTML = game.player2.name + "'s score: " + game.player2.score;
}


