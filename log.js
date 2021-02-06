class log{
    constructor(x,y,h,a){
        var boptions={
            restitution: 0.5,
            friction: 1
        }
        
         this.body=Bodies.rectangle(x,y,20,h,boptions)
         this.w=20
         this.h=h
         Body.setAngle(this.body,a)
          World.add(myWorld,this.body)
    }

    display(){
        push();
        fill("brown")
        angleMode(RADIANS)
        strokeWeight(5)
        stroke("white")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,this.w,this.h)  
        pop();
    }

}