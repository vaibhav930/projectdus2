
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//const Body = Matter.Body;


function preload()
{
	paperimg = loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	

      ground = new Ground(400,690,800,20);


	//Create the Bodies Here.
	block1 = new dustbin(340,630,20,100)
	block2 = new dustbin(440,670,180,20) 
	block3 = new dustbin(540,630,20,100)
	paper= new Paper(50,250,70);
	
	Engine.run(engine);
   
}


function draw() {
  //rectMode(CENTER);
  background("brown");
  
paper.display();
ground.display();
block1.display();
block2.display();
block3.display();


//keyPressed();


}
function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-300});


}
}


