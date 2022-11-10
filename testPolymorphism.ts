export class Animal{
    name:string;
    constructor(theName : string){
        this.name = theName;
    }
    move(distance : number =0){
        console.log(`${this.name} moved ${distance}m.`);
        
    }
}

class Snake extends Animal{
    constructor(name:string){
        super(name);
    }
    move(distance=10){
        console.log("Slithering...");
        super.move(distance)
    }
}

class Horse extends Animal{
    constructor(name:string){
        super(name)
    }
    move(distance = 50){
        super.move(distance)
        console.log("Galloping...");
        
    }
}

var sam = new Snake("Sammy the python");
var tcm : Horse = new Horse("Tommy the Palomion")

sam.move();
tcm.move(100);


// 多型的應用

function race(a1:Animal , a2:Animal){
    a1.move()
    a2.move()
}

race(sam,tcm)
