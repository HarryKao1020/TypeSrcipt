var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.numberOfLegs = 8;
        this.name = name;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 6 strong legs"     // error! name is readonly
console.log(dad.name);
console.log(dad.numberOfLegs);
// 另一種寫法
// 在建構子的參數前面+上readonly or private or protected ， 就會變成成員變數
var Octopus2 = /** @class */ (function () {
    function Octopus2(name) {
        this.name = name;
    }
    Octopus2.prototype.getName = function () { return this.name; };
    return Octopus2;
}());
var mom = new Octopus2("Women with the 8 weak legs");
console.log(mom.getName());
