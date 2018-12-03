document.addEventListener("DOMContentLoaded", function (event) {

    var window = document.querySelector(".start");
    var main = document.querySelector(".main");
    var start = document.querySelector("#ready");
    var again = document.querySelector("#again");
    var chat = document.querySelector(".jumping-dots");
    var chatDiv = document.querySelector("#chat");

    var startgame =  function () {

        if (document.querySelector(".coin") !== null){
            document.querySelector(".coin").classList.remove("coin");
        }
        window.classList.add("invisible");
        main.classList.remove("invisible");

        var Furry = require("./furry.js");
        var Coin = require("./coin.js");


        var Game = function () {

            this.board = document.querySelectorAll("#board div");
            this.furry = new Furry();
            this.coin = new Coin();
            this.score = 0;


            this.index = function (x, y) {
                return x + (y * 10);
            };

            this.showFurry = function () {

                if (document.querySelector(".furry") != null) {
                    this.hideVisibleFurry();
                }

                var showFuryOnBoard = this.board[this.index(this.furry.x, this.furry.y)];

                if (showFuryOnBoard !== undefined) {
                    showFuryOnBoard.classList.add('furry');
                }
            };

            this.showCoin = function () {
                this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
            };

            var self = this;
            this.startGame = function () {
                this.idSetInterval = setInterval(function () {
                    self.moveFurry();
                }, 250);
            };

            this.moveFurry = function () {
                if (this.furry.direction === "right") {
                    this.furry.x = this.furry.x + 1;
                } else if (this.furry.direction === "left") {
                    this.furry.x = this.furry.x - 1;
                } else if (this.furry.direction === "top") {
                    this.furry.y = this.furry.y - 1;
                } else if (this.furry.direction === "bottom") {
                    this.furry.y = this.furry.y + 1;
                }
                this.showFurry();
                this.checkCoinCollision();
                this.gameOver();
            };

            this.hideVisibleFurry = function () {
                document.querySelector(".furry").classList.remove("furry");
            };

            this.turnFurry = function (event) {

                switch (event.which) {
                    case 37:
                        this.furry.direction = "left";
                        break;
                    case 38:
                        this.furry.direction = "top";
                        break;
                    case 39:
                        this.furry.direction = "right";
                        break;
                    case 40:
                        this.furry.direction = "bottom";
                        break;
                }

            };

            document.addEventListener("keydown", function (event) {
                self.turnFurry(event);
            });

            this.checkCoinCollision = function () {

                if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
                    document.querySelector(".coin").classList.remove("coin");
                    this.score++;
                    var points = document.querySelector("strong");
                    points.innerHTML = this.score;

                    if(this.score === 1){
                        chat.classList.add("invisible");
                        chatDiv.style.width = "250px";
                        chatDiv.style.padding = "20px";
                        chatDiv.innerHTML = "Just 1? Are you retarded or what?";
                    }else if(this.score === 2){
                        chatDiv.innerHTML = "Ok, that's better...";
                    }else if(this.score === 4){
                        chatDiv.innerHTML = "I like sausages";
                    }else if(this.score === 5){
                        chatDiv.innerHTML = "I could eat them all the time!";
                    }else if(this.score === 7){
                        chatDiv.innerHTML = "Once I farted on an elevator...";
                    }else if(this.score === 9){
                        chatDiv.innerHTML = "...and it was wrong on so many levels!";
                    }else if(this.score === 11){
                        chatDiv.innerHTML = "haha, that was funny";
                    }else if(this.score === 14){
                        chatDiv.innerHTML = "But you know what is not funny?";
                    }else if(this.score === 16){
                        chatDiv.innerHTML = "Hungry pug";
                    }else if(this.score === 18){
                        chatDiv.innerHTML = "So don't read this and damn! Show me the sausage!";
                    }else if(this.score === 20){
                        chatDiv.innerHTML = "Just 20? Man, I know you can better";
                    }else if(this.score === 22){
                        chatDiv.innerHTML = "I see you are bored a little...";
                    }else if(this.score === 24){
                        chatDiv.innerHTML = "Wanna hear a joke?";
                    }else if(this.score === 26){
                        chatDiv.innerHTML = "Ok, but give me two more sasusages...";
                    }else if(this.score === 28){
                        chatDiv.innerHTML = "Ok, here I go:";
                    }else if(this.score === 29){
                        chatDiv.innerHTML = "What happened when the CAT won the Pug beauty contest?";
                    }else if(this.score === 30){
                        chatDiv.innerHTML = "...";
                    }else if(this.score === 31){
                        chatDiv.innerHTML = "a Cat-has-trophy!";
                    }else if(this.score === 32){
                        chatDiv.innerHTML = "HA-HA!";
                    }else if(this.score === 33){
                        chatDiv.innerHTML = "Very funny!";
                    }else if(this.score === 34){
                        chatDiv.innerHTML = "And not funny at the same time...";
                    }else if(this.score === 35){
                        chatDiv.innerHTML = "Heeey, I see you liked that";
                    }else if(this.score === 36){
                        chatDiv.innerHTML = "Ok, get 40 and I'll tell you other joke";
                    }else if(this.score === 37){
                        chatDiv.innerHTML = "I'm waiting";
                    }else if(this.score === 40){
                        chatDiv.innerHTML = "Ok, so listen:";
                    }else if(this.score === 41){
                        chatDiv.innerHTML = "Whats a pugs favorite musical instrument?";
                    }else if(this.score === 42){
                        chatDiv.innerHTML = "...";
                    }else if(this.score === 43){
                        chatDiv.innerHTML = "The dinner bell!";
                    }else if(this.score === 44){
                        chatDiv.innerHTML = "BUAHAHAHAHA";
                    }else if(this.score === 45){
                        chatDiv.innerHTML = "HRHRRRHHHRKHEE";
                    }else if(this.score === 46){
                        chatDiv.innerHTML = "Really good.";
                    }else if(this.score === 47){
                        chatDiv.innerHTML = "So, next joke at 60, you in?";
                    }else if(this.score === 48){
                        chatDiv.innerHTML = "Oh, i see you REALLY liked my joke!";
                    }else if(this.score === 49){
                        chatDiv.innerHTML = "OK, next will be the best";
                    }else if(this.score === 50){
                        chatDiv.innerHTML = "But need to wait till 60";
                    }else if(this.score === 60){
                        chatDiv.innerHTML = "So here we are, 60 sausages!";
                    }else if(this.score === 61){
                        chatDiv.innerHTML = "Are you ready...";
                    }else if(this.score === 62){
                        chatDiv.innerHTML = "For the best joke ever?";
                    }else if(this.score === 63){
                        this.score = 0;
                        chatDiv.innerHTML = "Ha-ha! Look at your score";
                    }
                    this.coin = new Coin();
                    this.showCoin();
                }
            };

            this.gameOver = function () {

                if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
                    document.getElementById("over").classList.remove("invisible");
                    if (document.querySelector(".furry") !== null) {
                        document.querySelector(".furry").classList.remove("furry");
                    }
                    document.getElementById("endScore").innerHTML = document.querySelector("strong").innerHTML;
                    return clearInterval(this.idSetInterval);
                }
            }
        };

        var game = new Game();
        game.showFurry();
        game.showCoin();
        game.startGame();

    };

    start.addEventListener("click", startgame);
    again.addEventListener("click", startgame);
    again.addEventListener("click", function (){
        document.getElementById("over").classList.add("invisible");
    });


});
