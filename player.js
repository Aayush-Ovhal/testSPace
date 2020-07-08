class Player{
    constructor(){
       this.player;
       this.detailX;
       this.detailY;
       this.xdir = 30;
       this.ydir = 0;

       this.playerImg = loadModel("spaceCraft.obj",true);
    }

    setDir(x,y){
      this.xdir = x;
      this.ydir = y;
    }

    display(){
      colorMode(RGB);
      push();
      scale(0.8);
      translate(this.xdir,this.ydir);
      rotateX(millis()/1000)
      fill(0,0,255);
      model(this.playerImg);
      pop();
    }
}