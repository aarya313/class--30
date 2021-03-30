class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  this.pig=255
  }
display(){
  if(this.body.speed<3){
super.display();
  }
  else{
    World.remove(world,this.body)
    this.pig=this.pig-5
    push()
    tint(255,this.pig)
    image(this.image, this.body.position.x, this.body.position.y , this.width, this.height)
    pop()
  }
 }
}