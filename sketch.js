
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var paper,ground1;


function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
  
	if(keyDown("UP ARROW")){
		paper.x = 540;
		paper.y = 760;
	}
   
   box1 = new Box(710,503,280,150);
   box2 = new Box(710,470,20,200);
   box3 = new Box(970,470,20,200);

   paper = new Paper(100,400,10);

   ground1 = new Ground(500,670,1000,20);
    	 
	 Engine.run(engine);
  
}


function draw() {
  background(255);
  ground1.display();
  box1.display();
  box2.display(); 
  box3.display();
  paper.display();
  
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10})
	}
}


