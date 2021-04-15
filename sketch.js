//variables

var backgroundImage;
var database;
var balloon, balloonImage1, balloonImage2, balloonImage3;

function preload(){
//preload the images here
backgroundImage = loadImage("backgroundImageballoon-copy.png");
balloonImage1 = loadImage("balloon1.png", "Balloon2.png", "Balloon3.png");
balloonImage2 = loadImage("balloon2.png", "Balloon2.png", "Balloon3.png");
balloonImage3 = loadImage("balloon3.png", "Balloon2.png", "Balloon3.png");

}
function setup() {
  createCanvas(1200,800);
  //database = firebase.database;
  
//create the sprites here

  balloon = createSprite(400, 600, 50, 50);
  balloon.addImage(balloonImage1, balloonImage2, balloonImage3);
  balloon.scale = 0.4;

  
}

function draw() {
  background(backgroundImage);
  //function draw

  //balloon.scale = balloon.y*;

  if(keyDown("left")){
    balloon.x = balloon.x - 5;
  }
  else if(keyDown("right")){
    balloon.x = balloon.x + 5;
  }
  else if(keyDown("up")){
    balloon.y = balloon.y - 5;
  }
  else if(keyDown("down")){
    balloon.y = balloon.y + 5;
  }
  if(balloon.y<=500 && balloon.y>=100){
    balloon.scale = 0.001*balloon.y*0.09*8;
  }
  
  drawSprites();

  fill("black");
  textSize(15);
  text("*Use arrow keys to move hot air balloon!*", 20, 20);
}