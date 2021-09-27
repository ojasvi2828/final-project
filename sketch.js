const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";
var bg,bg2,form,system,code,security;
var score=0;
var gameState ="start";
function preload() {
  bg = loadImage("png/bts.jpg");
 // bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
}

function draw() {
  
  if(gameState === "start"){
    background(bg);
    startButton = createButton("PLAY");
    startButton.position(450, height/2+150);
    startButton.size(200,70);
    startButton.style('background', 'pink'); 
    startButton.mouseClicked(()=>{
      gameState = "level1";
      button.hide();
    })
  }
  if(gameState === "level1"){
    
  }
  if(gameState === "level2"){
    

  }
  if(gameState === "level3"){
    
  }
 
  
  
 

  if(score === 3) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites();
  textSize(20);
  fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY);
}