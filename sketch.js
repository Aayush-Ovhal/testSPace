var canvas;

var player;
let detailX;

var grounds = [];
var ground,ground2;

var pos = 0;

var zpos = 0;

function setup(){
canvas = createCanvas(window.innerWidth,window.innerHeight,WEBGL);

player = new Player();

  for(var i = 0; i < 3;i++){
    ground = new Box(i+pos-100,zpos);
    grounds.push(ground);
    pos += 120;
  }

}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
     player.setDir(200,0);
  }else if(keyCode === LEFT_ARROW){
      player.setDir(-100,0);
  }
  else if(keyCode === UP_ARROW){
    player.setDir(0,-100);
   }
  else if(keyCode === DOWN_ARROW){
      player.setDir(30,0);
  }
}

function draw(){
background(0);

player.display();

for(var g of grounds){
  g.display();
}
}