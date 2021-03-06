class mango {
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:true,
         
            friction:1
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)

        this.image=loadImage("mango.png")
        
    }

    display()
    {
        var mangopos=this.body.position

        imageMode(CENTER);
        image(this.image,mangopos.x,mangopos.y,50,50);
    }
}
