const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var rand = Math.round(random(1,5));
var thunder;

function preload(){
    thunder1_img = loadImage("thunderbolt/1.png");
    thunder2_img = loadImage("thunderbolt/2.png");
    thunder3_img = loadImage("thunderbolt/3.png");
    thunder4_img = loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;

    for(var i = 0;i < maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    } 
    
    umbrella = new Umbrella(20,20);

    thunder = createSprite(400,400,20,100);
    switch(rand){
        case 1: thunder.addImage("1.png",thunder1_img);
        break;
        case 2: thunder.addImage("2.png", thunder2_img);
        break;
        case 3: thunder.addImage("3.png", thunder3_img);
        break;
        case 4: thunder.addImage("4.png", thunder4_img);
        break;
       }
    
}

function draw(){
   Engine.update(engine);
   drops.display();
   drops.update(); 

   umbrella.display();

}   

