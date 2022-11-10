class Person{
    protected name:string
    constructor(name:string){
        this.name = name;
    }
    public sayHi():void{
        console.log(`Hello My name is ${this.name}`);
    }
}

var p1 = new Person("Wang")
// console.log(p1.sayHi());
p1.sayHi()

class Employee extends Person{
    private department : string;
    constructor(name:string,department:string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch(){
        return `Hello, my name is ${this.name} , I'm work in ${this.department} .`
    }
}

let howard = new Employee("Howard","Sales Department")
console.log(howard.getElevatorPitch());
