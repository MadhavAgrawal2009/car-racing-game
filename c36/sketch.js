var database, form, player, game, allPlayers;
var playerCount = 0, gameState = 0;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
    if (playerCount === 4) {
        game.update(1)
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
}

