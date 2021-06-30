class Ground
{
    
constructor(x,y,w,h)
{
    let Option={
        isStatic:true
    } ;

    this.body=Bodiesrectangle(x,y,w,h,Option)
    this.width=w;
    this.height=h;
    world.add(world,thisbody)
}
}
show()
{
    var pos=this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);

rect(pos.x,pos.y,this.w,this.h)

pop();
}