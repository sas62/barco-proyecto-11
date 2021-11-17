var oceanoImg
var barcoImg


function preload(){
oceanoImg = loadImage("sea.png");
barcoImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  createCanvas(1280,689);
  
  var oceano = createSprite(650,325,40,40);
  oceano.addImage("oceano", oceanoImg);
  
  var barco = createSprite(650,350,40,40);
  barco.addAnimation("barco", barcoImg);
  barco.scale = 0.4;

  
}

function draw() {
  background("lightBlue");
  

  
  


 drawSprites()
}