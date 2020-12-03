class Box{
    constructor(x,y,width,height)
    {
        this.body=Bodies.rectangle(x,y,width,height,{restitution:0.8,friction:0.3,density:1.0})
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
      translate(pos.x,pos.y)
   rotate(this.body.angle)

        rectMode(CENTER)
        fill("orange")
        rect(0,0,this.width,this.height)
        pop()
    }
}





