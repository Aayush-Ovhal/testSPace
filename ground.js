class Box{
   constructor(x,z){
     this.ground;
     this.x = x;
     this.y = 110;
     this.z = z;
   }

   display(){
     colorMode(RGB);
    push();
    translate(this.x,this.y,this.z);
    fill(255,0,0);
    this.ground = box(120);
    pop();
   }
}