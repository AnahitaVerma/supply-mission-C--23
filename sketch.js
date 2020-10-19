var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomwall, leftwall,rightwall;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	bottomwall = createSprite(width/2,height-45,200,20);
	bottomwall.shapeColor = "red";

	leftwall = createSprite(300,height-80,20,100);
	leftwall.shapeColor = "red";
	
	rightwall = createSprite(500,height-80,20,100);
	rightwall.shapeColor = "red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 bottomwall = Bodies.rectangle(width/2,height-45,200,20,{isStatic: true});
	 World.add(world,bottomwall)

	 rightwall = Bodies.rectangle(width/2,height-45,200,20,{isStatic: true});
	 World.add(world,rightwall)

	 leftwall = Bodies.rectangle(width/2,height-45,200,20,{isStatic: true});
	 World.add(world,leftwall)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 
	Matter.Body.setStatic(packageBody,false)
  }
}



