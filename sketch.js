var accessCode1 = "adorable representative m.c for youth";
var accessCode2 = "kim namjoon";
var accessCode3 = "jungkook";
var accessCode4 = "no more dreams";
var accessCode5 = "v";

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg,bg2,form,system,code,security;
var score=0;
var count=0;
var flag = 0;
var gameState ="start";
var placeHolder1,placeHolder2,placeHolder3,placeHolder4,placeHolder5,placeHolder6,placeHolder7,placeHolder8,placeHolder9;
function preload() {
  bg = loadImage("png/bts.jpg");
  bg2 =loadImage("png/bts2.jpg");
  b1= loadImage("png/boys/image_part_001.jpg");
  b2= loadImage("png/boys/image_part_002.jpg");
  b3= loadImage("png/boys/image_part_003.jpg");
  b4= loadImage("png/boys/image_part_004.jpg");
  b5= loadImage("png/boys/image_part_005.jpg");
  b6= loadImage("png/boys/image_part_006.jpg");
  b7= loadImage("png/boys/image_part_007.jpg");
  b8= loadImage("png/boys/image_part_008.jpg");
  b9= loadImage("png/boys/image_part_009.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  createCanvas(1000,500);
  if(gameState === "start"){

  //Quiz
    quizButton = createButton("QUIZ");
    quizButton.position(150, height/2+150);
    quizButton.size(200,70);
    quizButton.style('background', 'pink'); 
    quizButton.mousePressed(()=>{
      gameState = "quiz";
      clear();
      score = 0;
      count = 0;
      system = new System();
      security = new Security();
      code = new Code();
    })

    //Puzzle
    puzzleButton = createButton("PUZZLE");
    puzzleButton.position(550, height/2+150);
    puzzleButton.size(200,70);
    puzzleButton.style('background', 'pink'); 
    puzzleButton.mousePressed(()=>{
      gameState = "puzzle";
      clear();
    var options = {isStatic:true}
    ground1 = Bodies.rectangle(500,380,1000,20,options);
    World.add(world,ground1);
    ground2 = Bodies.rectangle(500,280,1000,20,options);
    World.add(world,ground2);
    ground3 = Bodies.rectangle(500,181,1000,20,options);
    World.add(world,ground3);
    x1 = createSprite(143,132,20,20);
    x2 = createSprite(243,132,20,20);
    x3 = createSprite(343,132,20,20);
    y1 = createSprite(143,232,20,20);
    y2 = createSprite(243,232,20,20);
    y3 = createSprite(343,232,20,20);
    z1 = createSprite(143,332,20,20);
    z2 = createSprite(243,332,20,20);
    z3 = createSprite(343,332,20,20);
    x1.addImage(b3);
    x2.addImage(b6);
    x3.addImage(b1);
    y1.addImage(b9);
    y2.addImage(b4);
    y3.addImage(b8);
    z1.addImage(b5);
    z2.addImage(b2);
    z3.addImage(b7);

    })

    placeHolder1 = createSprite(143,132,98,78)
    placeHolder2 = createSprite(243,132,98,78)
    placeHolder3 = createSprite(343,132,98,78)
    placeHolder4 = createSprite(143,232,98,78)
    placeHolder5 = createSprite(243,232,98,78)
    placeHolder6 = createSprite(343,232,98,78)
    placeHolder7 = createSprite(143,332,98,78)
    placeHolder8 = createSprite(243,332,98,78)
    placeHolder9 = createSprite(343,332,98,78)
    
    placeHolder11 = createSprite(543,132,98,78)
    placeHolder12 = createSprite(643,132,98,78)
    placeHolder13 = createSprite(743,132,98,78)
    placeHolder14 = createSprite(543,232,98,78)
    placeHolder15 = createSprite(643,232,98,78)
    placeHolder16 = createSprite(743,232,98,78)
    placeHolder17 = createSprite(543,332,98,78)
    placeHolder18 = createSprite(643,332,98,78)
    placeHolder19 =createSprite(743,332,98,78)
  }
    }

function draw() {
  background(bg);


 //Quiz Beginner Level
  if(gameState === "quiz"){
    clear();
    flag = 1;
    background(bg2);
    code.clues();
    security.display();
    textSize(20);
    fill("black");
    text("Score: " + score, 350, 25);
    text("Level: Beginner ", 550, 25);
   }
  if(count === 5 && score <4 && gameState =="quiz"){
    clear();
    background(bg2);
    security.hide();
    text("Score: " + score, 350, 25);
    text("Level: Begginer ", 550, 25);
    text("Try Again",width/2-50,height/2-50);
  }
  if(score === 5 && count ==5 && gameState =="quiz") {
    clear();
    background(bg2);
    count =0;
    gameState = "avglevel"
    security.show();
  }


  //Quiz Average Level
  if(gameState === "avglevel"){
    accessCode1 = "rm"
    accessCode2 = "jin"
    accessCode3 = "177"
    accessCode4 = "day dream"
    accessCode5 = "jimin"
    clear();
    background(bg2);
    flag = 1;
    code.clues();
    security.display();
    textSize(20);
    fill("black");
    text("Score: " + score, 350, 25);
    text("Level: Average ", 550, 25);
    console.log(count);
  }
  if(count === 5 && score <10 && gameState=="avglevel"){
    clear();
    background(bg2);
    security.hide();
    text("Score: " + score, 350, 25);
    text("Level: Average ", 550, 25);
    text("Try Again",width/2-50,height/2-50);
  }
  if(score === 10 && count ==5 && gameState=="avglevel") {
    clear();
    background(bg2);
    count =0;
    gameState = "prolevel"
    security.show();
  }

 //Quiz Pro Level
  if(gameState === "prolevel"){
    accessCode1 = "j-hope"
    accessCode2 = "2010"
    accessCode3 = "230"
    accessCode4 = "i need you"
    accessCode5 = "jimin"
    clear();
    background(bg2);
    flag = 1;
    code.clues();
    security.display();
    textSize(20);
    fill("black");
    text("Score: " + score, 350, 25);
    text("Level: Pro ", 550, 25);
  }
  if(count === 5 && score <15 && gameState=="prolevel"){
    clear();
    background(bg2);
    security.hide();
    text("Score: " + score, 350, 25);
    text("Level: Pro ", 550, 25);
    text("Try Again",width/2-50,height/2-50);
  }
  if(score === 15 && count ==5 && gameState=="prolevel") {
    clear();
    background(bg2);
    text("Score: " + score, 350, 25);
    text("Level: Pro ", 550, 25);
    text("You are a true fan",width/2-50,height/2-50);
  }

  //Puzzle
  if(gameState === "puzzle"){
    clear();
    background("pink");
    placeHolder1.visible = true;
      placeHolder2.visible = true;
      placeHolder3.visible = true;
      placeHolder4.visible = true;
      placeHolder5.visible = true;
      placeHolder6.visible = true;
      placeHolder7.visible = true;
      placeHolder8.visible = true;
      placeHolder9.visible = true;
      placeHolder11.visible = true;
      placeHolder12.visible = true;
      placeHolder13.visible = true;
      placeHolder14.visible = true;
      placeHolder15.visible = true;
      placeHolder16.visible = true;
      placeHolder17.visible = true;
      placeHolder18.visible = true;
      placeHolder19.visible = true;
    fill("red")
    textSize(30);
    text("DONT OVERLAP IMAGES", width/2-230,50);
    if(flag == 1){
      security.hide();
      flag = 0;
    }
    drawSprites();
    x1.display();
    x2.display();
    x3.display();
    y1.display();
    y2.display();
    y3.display();
    z1.display();
    z2.display();
    z3.display();

    if(mousePressedOver(x1)){
      x1.x = mouseX;
      x1.y = mouseY;
    }
    if(mousePressedOver(x2)){
      x2.x = mouseX;
      x2.y = mouseY;
    }
    if(mousePressedOver(x3)){
      x3.x = mouseX;
      x3.y = mouseY;
    }
    if(mousePressedOver(y1)){
      y1.x = mouseX;
      y1.y = mouseY;
    }
    if(mousePressedOver(y2)){
      y2.x = mouseX;
      y2.y = mouseY;
    }
    if(mousePressedOver(y3)){
      y3.x = mouseX;
      y3.y = mouseY;
    }
    if(mousePressedOver(z1)){
      z1.x = mouseX;
      z1.y = mouseY;
    }
    if(mousePressedOver(z2)){
      z2.x = mouseX;
      z2.y = mouseY;
    }
    if(mousePressedOver(z3)){
      z3.x = mouseX;
      z3.y = mouseY;
    }
    if((x3.x>=placeHolder11.x-50 && x3.x<=placeHolder11.x+50)&& (x3.y>=placeHolder11.y-50 && x3.y<=placeHolder11.y+50)
    && (z2.x>=placeHolder12.x-50 && z2.x<=placeHolder12.x+50)&& (z2.y>=placeHolder12.y-50 && z2.y<=placeHolder12.y+50)
    && (x1.x>=placeHolder13.x-50 && x1.x<=placeHolder13.x+50)&& (x1.y>=placeHolder13.y-50 && x1.y<=placeHolder13.y+50)
    && (y2.x>=placeHolder14.x-50 && y2.x<=placeHolder14.x+50)&& (y2.y>=placeHolder14.y-50 && y2.y<=placeHolder14.y+50)
    && (z1.x>=placeHolder15.x-50 && z1.x<=placeHolder15.x+50)&& (z1.y>=placeHolder15.y-50 && z1.y<=placeHolder15.y+50)
    && (x2.x>=placeHolder16.x-50 && x2.x<=placeHolder16.x+50)&& (x2.y>=placeHolder16.y-50 && x2.y<=placeHolder16.y+50)
    && (z3.x>=placeHolder17.x-50 && z3.x<=placeHolder17.x+50)&& (z3.y>=placeHolder17.y-50 && z3.y<=placeHolder17.y+50)
    && (y3.x>=placeHolder18.x-50 && y3.x<=placeHolder18.x+50)&& (y3.y>=placeHolder18.y-50 && y3.y<=placeHolder18.y+50)
    && (y1.x>=placeHolder19.x-50 && y1.x<=placeHolder19.x+50)&& (y1.y>=placeHolder19.y-50 && y1.y<=placeHolder19.y+50)
    ){
      clear();
      background("pink");
      placeHolder1.visible = false;
      placeHolder2.visible = false;
      placeHolder3.visible = false;
      placeHolder4.visible = false;
      placeHolder5.visible = false;
      placeHolder6.visible = false;
      placeHolder7.visible = false;
      placeHolder8.visible = false;
      placeHolder9.visible = false;
      placeHolder11.visible = false;
      placeHolder12.visible = false;
      placeHolder13.visible = false;
      placeHolder14.visible = false;
      placeHolder15.visible = false;
      placeHolder16.visible = false;
      placeHolder17.visible = false;
      placeHolder18.visible = false;
      placeHolder19.visible = false;
      x1.visible=false;
      x2.visible=false;
      x3.visible=false;
      y1.visible=false;
      y2.visible=false;
      y3.visible=false;
      z1.visible=false;
      z2.visible=false;
      z3.visible=false;
      fill("red")
      textSize(30);
      text("You are a true fan",width/2-150,height/2-50);
    }
    
  }
   
  textSize(20);
  fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY);
}
