export default class Player{
    constructor(x,y,map){
        this.x = x;
        this.y = y;
        this.map=map;
    }

    move(direction) {
        switch (direction) {
            case 'left':
                if(this.x >= 10){
                    this.x -= 10 ;
                    break;
                }
                else{
                    break
                }
            case 'right':
                if(this.map.x > this.x + 10){
                    this.x += 10 ;
                    break;
                }
                else{
                    break
                }
            case 'up':
                if(this.y >=  10){
                    this.y -= 10;
                    break;
                }
                else{
                    break
                }
            case 'down':    // si this.mapa.y > this.y = mover
               if(this.map.y > this.y + 10){
                   this.y += 10 ;
                   break;
                }
                else{
                   break
              }
            default:
                break;
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, 10, 10); 
    }


}