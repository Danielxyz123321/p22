const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, playerArcher2;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage = loadImage("./assets/playerArcher.png")
  playerArcher2image = loadImage("./assets/playerArcher2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
var options = {
  isStatic: true
};
  //criar corpo do jogador
playerBase = Bodies.rectangle(200,350,180,150,options);
World.add(world, playerBase)
player = Bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
World.add(world, player)
playerArcher = Bodies.rectangle(200,playerBase.position.y - 160,50,500,options);
World.add(world, playerArcher)
}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()

  image(playerimage,player.position.x,player.position.y,50,180)
  //exibir a imagem da base do jogador usando a função image()

  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerArcherimage,player.position.x + 20,player.position.y + 20,80,80)
  image(playerArcher2image,player.position.x - 50,player.position.y + 22,80,80)
  Engine.update(engine);
  
  
  
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
