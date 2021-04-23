class Box{
    //properties and functions
    constructor(x,y,width,height){//arguements
    var options={
        restitution:0.8,
    }
    this.mbody=Bodies.rectangle(x, y, width, height, options);
    World.add(myWorld,this.mbody);
    this.width=width;
    this.height=height;
    }
    display(){
        var angle=this.mbody.angle
        push ()
        translate (this.mbody.position.x,this.mbody.position.y)
        angleMode (RADIANS)
        rotate (angle)
        rectMode(CENTER);
        fill("blue");
        rect (0,0,this.width,this.height);
        pop ()
    }
}