
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PaperIMG, CrumpledPaperSprite;
var DustbinIMG, DustbinSprite;

function preload() {
	PaperIMG = loadImage("paper.png");
	DustbinIMG = loadImage("dustbin.png");
}

function setup() {
	createCanvas( 1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 380, width, 20);

	dustbinwall1 = new Dustbin( 800, 295, 20, 150);
	dustbinwall2 = new Dustbin( 860, 360, 100, 20);
	dustbinwall3 = new Dustbin( 920, 295, 20, 150);
	crumpledPaper = new paper( 100, 200, 20);

	CrumpledPaperSprite = createSprite(100, 200, 20, 20);
	CrumpledPaperSprite.addImage(PaperIMG);
	CrumpledPaperSprite.scale = 0.15;
	
	DustbinSprite = createSprite(860, 273);
	DustbinSprite.addImage(DustbinIMG);
	DustbinSprite.scale = 0.6;
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  CrumpledPaperSprite.x = crumpledPaper.body.position.x;
  CrumpledPaperSprite.y = crumpledPaper.body.position.y;

  ground.display(); 
  crumpledPaper.display(); 
  dustbinwall1.display();
  dustbinwall2.display();
  dustbinwall3.display();	
  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position,{x:75,y:-80});
  }
}

