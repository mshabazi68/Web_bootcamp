class Car{
    // creating the car objet with thier properties
    constructor(x,y,width , height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;


        this.controls = new Controls();
    }
// drawing the car on canvas and fill the regtangle with black color.  
    draw(ctx){
        ctx.beginPath();
        ctx.rect(this.x-this.width/2,
                this.y-this.height/2,
                this.width,
                this.height
        );
        ctx.fill();
    }
}