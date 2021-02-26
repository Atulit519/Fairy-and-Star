var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 650);

	//fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	options = {
		isStatic: true,
		restitution: 0.3

	}

	starBody = Bodies.circle(650 , 30 , 5 , options);
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  Engine.update(engine);
  background(bgImg);
  console.log(fairy.x);

  star.y = starBody.position.y;
  star.x = starBody.position.x;

  if(starBody.position.y > 500 && fairy.x > 500){
	Body.setStatic(starBody, true);

  }

  drawSprites();
  keyPressed();
  ellipse(starBody.position.x, starBody.position.y, 5);

}

function keyPressed() {
	if(keyDown("LEFT_ARROW")){
        fairy.x = fairy.x - 4;

	}

	if(keyDown("RIGHT_ARROW")){
        fairy.x = fairy.x + 2;

	}

	if(keyDown("DOWN_ARROW")){
		Body.setStatic(starBody, false);

	}
}
