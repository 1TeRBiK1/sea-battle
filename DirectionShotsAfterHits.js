export default class DirectionShotsAfterHits{
    constructor(idHits){
        this.directions = new Array();
        console.log(typeof idHits);
        if((typeof idHits) === "string"){
            /*
            '055' -> '056','054','045','065'
            -1j+1
            -1| . |
            i |.x.|
            +1| . |
            */
            if((Number(idHits[1]) - 1) >= 0){
            this.directions.push(String(Number(idHits) - 10))
            }
            if((Number(idHits[1]) + 1) <= 9){
            this.directions.push(String(Number(idHits) + 10))
            }
            if((Number(idHits[2]) - 1) >= 0){
                this.directions.push(String(Number(idHits) - 1))
            }
            if((Number(idHits[2]) + 1) <= 9){
                this.directions.push(String(Number(idHits) + 1))
            }
            console.log(this.directions);
            for(let i = 0; i < this.directions.length; i++){
                this.directions[i] = this.fixId(this.directions[i]);
            }
            console.log('direction: ' , this.directions);
        }
        if((typeof idHits) === "object"){
            console.log(this.minMaxIdHits(idHits));
            this.directions = this.minMaxIdHits(idHits);
            if((Math.abs(this.directions[0] - this.directions[1]) % 10) === 0){
                this.directions[0] -= 10;
                this.directions[1] -= -10;
            }
            else{
                this.directions[0] -= 1;
                this.directions[1] -= -1;
            }
            this.directions[0] = this.fixId(this.directions[0]);
            this.directions[1] = this.fixId(this.directions[1]);
            console.log('derection: ' , this.directions);
        }
        
}
    fixId(id){
        while(id.length < 3){
            id = '0' + id;
        }
        return id;
    }

    Shot(){
        return this.directions.splice(Math.floor(Math.random()*this.directions.length),1);
    }
    consoleDirection(){
        console.log(this.directions);
    }
    minMaxIdHits(idHits){
        return new Array(Math.min.apply(null,idHits),Math.max.apply(null,idHits));
    }
}