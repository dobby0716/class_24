class ground{
    constructor(x,y,w,h){
     
        this.w=w;
        this.h=h;

        this.body=Bodies.rectangle(x,y,w,h)
        World.add(myWorld,this.body)
        Body.setStatic(this.body,true)
    }
    display(){
        fill("brown")
        rect(this.body.position.x,this.body.position.y,this.w,this.h)        
    }
}