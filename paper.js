class Paper
{
constructor(){
var options={
restitution : 0.3,
friction :0,
density : 1.2

}
this.img = loadImage("paper.png")
this.body = Bodies.rectangle(100,50,20,20,options)
World.add(world,this.body)

}
display(){
   var position = this.body.position 
   imageMode(CENTER)
   image(this.img,position.x,position.y,50,50)
}

}
