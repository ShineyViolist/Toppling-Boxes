const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50,0,1,2.5);

    box2 = new Box(220,0,70,50,1.5,0.3,3);

    box3 = new Box(300,350,50,70,0,3,10);

    ground = new Ground();
}

function draw(){
    background("red");
    Engine.update(engine);
    box1.display("yellow");
    box2.display("blue");
    box3.display("purple");
    ground.display();
}