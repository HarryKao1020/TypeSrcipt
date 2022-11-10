class Greeter{
    greeting : string;
    constructor(message:string){
        this.greeting = message;
    }
    greet(){
        return `Hello ${this.greeting}`
    }
}

let Greeter1 = new Greeter("World")
console.log(Greeter1.greet());


class Animal{
    
   

    move(distanceInMeters: number =0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
    introduce(){
        console.log(`Hello,I'm a Animal`);
        
    }
}


class Dog extends Animal{
    bark(){
        console.log("Wolf! Wolf!");
        
    }
}

class Cat extends Animal{
    meow(){
        console.log("Meow! Meow!");
        
    }
}

var dog1 : Dog = new Dog();
dog1.move(30);
dog1.bark();
dog1.introduce()

var cat1 : Cat = new Cat();
cat1.move(20);
cat1.meow();

