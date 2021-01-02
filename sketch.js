const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var box1;
var engine,world;

var polygonimage,polygon;

var score = 0;

function preload(){
polygonimage = loadImage ("polygon.png")
}


function setup () {
var canvas = createCanvas (1280,610)

engine = Engine.create();
world = engine.world;

ground1 = new Ground (900,500,300,15)
ground2 = new Ground (675,280,300,15)

polygon = Bodies.rectangle(200,100,50,50);
World.add(world,polygon)

//layer 1

box1 = new Box (800,475,50,50);
box2 = new Box (850,475,50,50);
box3 = new Box (900,475,50,50);
box4 = new Box (950,475,50,50);
box5 = new Box (1000,475,50,50);

//layer 2

box6 = new Box (825,450,50,50);
box7 = new Box (875,450,50,50);
box8 = new Box (925,450,50,50);
box9 = new Box (975,450,50,50);

//layer 1

box10 = new Box (575,250,50,50);
box11 = new Box (625,250,50,50);
box12 = new Box (675,250,50,50);
box13 = new Box (725,250,50,50);
box14 = new Box (775,250,50,50);

//layer 2

box15 = new Box (600,200,50,50);
box16 = new Box (650,200,50,50);
box17 = new Box (700,200,50,50);
box18 = new Box (750,200,50,50);

slingshot = new SlingShot(polygon,{x:150, y:300});

Engine.run(engine)

}

function draw (){
background ("black")
fill("white")
text ("Score: " +score,100,40);

ground1.display();
ground2.display();


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

box6.display();
box7.display();
box8.display();
box9.display();

box10.display();
box11.display();
box12.display();
box13.display();
box14.display();

box15.display();
box16.display();
box17.display();
box18.display();

slingshot.display()
rectMode(CENTER)
rect(polygon.position.x,polygon.position.y, 10,10);
imageMode(CENTER)
image(polygonimage,polygon.position.x,polygon.position.y,80,80)



}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed (){

    if (keyCode === 32){
        slingshot.attach(polygon)
    }
}

