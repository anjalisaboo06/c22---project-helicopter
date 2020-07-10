const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helic_img, helic_sprite;
var pack_img, pack_sprite;
var pack_body, ground;

var engine, world;

var boxL, boxB, boxR;

function preload(){
helic_img = loadImage("helicopter.png");
pack_img = loadImage("package.png");

}

function setup(){

createCanvas(800, 800);

rectMode(CENTER);

boxL = createSprite(300, 720, 20, 100);
boxL.shapeColor = "red";

boxR = createSprite(500, 720, 20, 100);
boxR.shapeColor = "red";

//boxB = createSprite(400, 760, 200, 20);
//boxB.shapeColor = "red";
//World.add(world, boxB);



pack_sprite = createSprite(width/2, 80, 10, 10);
pack_sprite .addImage(pack_img);
pack_sprite.scale = 0.2;

helic_sprite = createSprite(width/2, 200, 10, 10);
helic_sprite.addImage(helic_img);
helic_sprite.scale = 0.6;

boxB = createSprite(400, 760, 200, 20);
boxB.shapeColor = "red";

engine = Engine.create();
world = engine.world;

ground = Bodies.rectangle(width/2, height-35, width, 10,{isStatic: true} );
ground.shapeColor = color(255, 255, 255);
World.add(world, ground);


pack_body = Bodies.circle(width/2, 200, 5,{ isStatic: true} );
World.add(world, pack_body);

console.log(boxB);

//ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic: true});
//World.add(world, ground);

Engine.run(engine);
                                                                                                                                                                                                                                                                    
}

function draw(){
rectMode(CENTER);
background(0);
Engine.update(engine);

pack_sprite.x = pack_body.position.x;
pack_sprite.y = pack_body.position.y;

drawSprites();
}

function keyPressed(){
if(keyCode === DOWN_ARROW){
Matter.Body.setStatic(pack_body, false);


}

}



