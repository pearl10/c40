var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars;
var car1,car1IMG;
var car2,car2IMG;
var car3,car3IMG;
var car4,car4IMG;
var trackIMG
function preload(){
car1IMG=loadImage("images/car1.png")
car2IMG=loadImage("images/car2.png")
car3IMG=loadImage("images/car3.png")
car4IMG=loadImage("images/car4.png")
trackIMG=loadImage("images/track.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
  game.end();
  }
}
