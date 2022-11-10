class Octopus{
    readonly name : string;
    readonly numberOfLegs : number = 8;
    constructor(name:string){
        this.name = name;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 6 strong legs"     // error! name is readonly

console.log(dad.name);
console.log(dad.numberOfLegs);


// 另一種寫法
// 在建構子的參數前面+上readonly or private or protected ， 就會變成成員變數
class Octopus2 {
    constructor(protected name:string){
    }
    public getName():string{return this.name}
}

let mom = new Octopus2("Women with the 8 weak legs")
console.log(mom.getName());
