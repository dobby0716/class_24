class bird{
    constructor(x,y,w,h){
        var boptions={
            restitution: 1,
            friction: 1
        }
        
         this.body=Bodies.rectangle(x,y,w,h,boptions)
         this.w=w
         this.h=h
          World.add(myWorld,this.body)
    }

    display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        push();
        fill("red")
        angleMode(RADIANS)
        strokeWeight(5)
        stroke("pink")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,this.w,this.h)  
        pop();
    }

}