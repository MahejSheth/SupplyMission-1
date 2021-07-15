var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	wallPosition=width/2-100
 	wallY=610

 	leftWallSprite=createSprite(wallPosition, wallY, 20,100);
 	leftWallSprite.shapeColor=color(255,0,0);

 	leftWallBody = Bodies.rectangle(wallPosition+20, wallY, 20,100 , {isStatic:true} );
 	World.add(world, leftWallBody);


    rightWallSprite = createSprite(130, wallY, 20, 100);
	rightWallSprite.shapeColor=color(255,0,0);

    rightWallBody = Bodies.rectangle(+30, wallY, 20,100 , {isStatic:true} );
 	World.add(world, rightWallBody);

	bottomWallSprite = createSprite(115,650,50,20);
	bottomWallSprite.shapeColor=color(255,0,0);

	bottomWallBody = Bodies.rectangle(+40, 650, 50,20 , {isStatic:true} );
	World.add(world, bottomWallBody);

Matter.Body.setStatic(wall1,true);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if ( keyCode=== DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);    
  }
}

function keyPressed(){
	if (keyCode=== RIGHT_ARROW){
		helicopterSprite.x=helicopterSprite.x+20;
    		translation={x:20,y:0}
    		Matter.Body.translate(packageBody, translation)
	}
}

function keyPressed(){
	if (keyCode=== LEFT_ARROW){
		helicopterSprite.x=helicopterSprite.x-20;
    		translation={x:-20,y:0}
    		Matter.Body.translate(packageBody, translation)
	}
}