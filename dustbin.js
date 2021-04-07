class dustbin{
    constructor(x,y,width,height){
    var options= {
    isStatic:true
    
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    this.image = loadImage("dustbingreen.png")
    World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
     
     
     rectMode(CENTER);
     fill("red");
     strokeWeight(4) ;
     imageMode(CENTER);
     image(this.image, 500,555,0,250);
     //rect(pos.x,pos.y,this.width, this.height);
     
    
    
    
    
    
    }}