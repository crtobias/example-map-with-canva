export default class map{
    constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.color = color;
    }

    

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, this.x, this.y); 
    }


}