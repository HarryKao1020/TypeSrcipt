var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello ".concat(this.greeting);
    };
    return Greeter;
}());
var Greeter1 = new Greeter("World");
console.log(Greeter1.greet());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved ".concat(distanceInMeters, "m."));
    };
    Animal.prototype.introduce = function () {
        console.log("Hello,I'm a ".concat(this.type));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(type) {
        return _super.call(this, type) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Wolf! Wolf!");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        console.log("Meow! Meow!");
    };
    return Cat;
}(Animal));
var dog1 = new Dog("Dog");
dog1.move(30);
dog1.bark();
dog1.introduce();
var cat1 = new Cat();
cat1.move(20);
cat1.meow();
