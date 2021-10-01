const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";
var bg,bg2,form,system,code,security;
var score=0;
var gameState ="start";
function preload() {
  bg = loadImage("png/bts.jpg");
  bg2 = loadImage("png/83171521.jpg")
}

function setup() {
  createCanvas(1000,500);
  if(gameState === "start"){
    background(bg);

    quizButton = createButton("QUIZ");
    quizButton.position(150, height/2+150);
    quizButton.size(200,70);
    quizButton.style('background', 'pink'); 
    quizButton.mousePressed(()=>{
      gameState = "quiz";
      clear();
      system = new System();
      security = new Security();
      code = new Code();
    })

    puzzleButton = createButton("PUZZLE");
    puzzleButton.position(550, height/2+150);
    puzzleButton.size(200,70);
    puzzleButton.style('background', 'pink'); 
    puzzleButton.mousePressed(()=>{
      gameState = "puzzle";
      clear();
    })
  }
}

function draw() {
  
  
  if(gameState === "quiz"){
    clear();
    background(bg2);
    code.clues();
    security.display();
    textSize(20);
    fill("black");
    text("Score: " + score, 450, 50);
  }
  if(gameState === "puzzle"){
    
  }
  
  if(score === 5) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }
 
  drawSprites();
  
 /* textSize(20);
  fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY);*/
}