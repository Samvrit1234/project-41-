class Umbrella{    
    constructor(x,y){
        var options = {
            friction : 0.1            
        }
        this.r = 10;
        this.image = loadImage("Walking Frame/walking_1.png");
        this.body = Bodies.circle(x,y,this.releaseEvents,options);
        World.add(world, this.body);                
    }
   
    display(){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}