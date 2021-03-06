
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var boy,boyimg;
var ground1;
var tree1,tree_img;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6;
var econstraint1;

function preload(){
	boy_img=loadImage("boy.png");
    tree_img=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	boy=Matter.Bodies.rectangle(260,350,10,10);

	ground1=new ground(400,390,800,10);

	tree1= new tree(660,300,60,165);
  
	stone1=new stone(150,300,20,20);
  
	mango1=new mango(550,200,25);
	mango2=new mango(570,120,25);
	mango3=new mango(610,150,25);
	mango4=new mango(640,90,25);
	mango5=new mango(660,180,25);
	mango6=new mango(690,110,25);
	mango7=new mango(735,155,25);
	mango8=new mango(765,200,25);
	
	econstraint1=new econstraint(stone1.body,{x:230,y:315});

//	Engine.run(engine);
  
}
function draw() {
	background("lightgrey");  
  
	Engine.update(engine);
   
	imageMode(CENTER);
	image(boy_img,boy.position.x,boy.position.y,100,150);
  
	tree1.display();
  
	ground1.display();
  
	imageMode(CENTER);
	image(tree_img,650,220,300,350);
  
	stone1.display();
  
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	
	econstraint1.display();
  
	detectCollision(stone1,mango1);
	detectCollision(stone1,mango2);
	detectCollision(stone1,mango3);
	detectCollision(stone1,mango4);
	detectCollision(stone1,mango5);
	detectCollision(stone1,mango6);
	detectCollision(stone1,mango7);
	detectCollision(stone1,mango8);
  }
  function detectCollision(lstone,lmango){
	  mangoBodyPosition = lmango.body.position;
	  stoneBodyPosition = lstone.body.position;

	  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if (distance<=lmango.r +lstone.r) {
		  Matter.Body.setStatic(lmango.body,false);
	  }
  }
  function mouseDragged()
  {
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased()
  {
	econstraint1.fly();
  }
  
  function keyPressed()
  {
	if(keyCode===32)
	{
	  Matter.Body.setPosition(stone1.body,{x:140,y:315});
	  econstraint1.attacher(stone1.body);
	}
  }