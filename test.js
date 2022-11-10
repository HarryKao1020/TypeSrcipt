var list = [1, 2, 3, 4];
var newList = [22, 33, 44, 55, "Bob", "James"];
newList[10] = "TEN";
for (var x_1 in newList) {
    console.log(newList[x_1]);
}
console.log("-----------------");
for (var _i = 0, newList_1 = newList; _i < newList_1.length; _i++) {
    var x_2 = newList_1[_i];
    console.log(x_2);
}
console.log("-----------------");
newList.forEach(function (e) { console.log(e); });
var x;
x = ["string", 123, true];
x.forEach(function (e) { console.log(e); });
var fruit;
fruit = ["apple", 50];
for (var _a = 0, fruit_1 = fruit; _a < fruit_1.length; _a++) {
    var x_3 = fruit_1[_a];
    console.log(x_3);
}
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
console.log(Color.Red);
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Somet");
}
var numLivesForCat = 30;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
kitty.name = "Dddd";
console.log(kitty.name);
function add(x, y) {
    return x + y;
}
console.log(add(50, 60));
var newAdd = function (x, y) {
    return x + y;
};
console.log(newAdd(80, 250));
var buildName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
var result1 = buildName("Bob", "Lee");
console.log(result1);
var buildName2 = function (firstNmae, lastName) {
    return "".concat(firstNmae, " ").concat(lastName);
};
var result2 = buildName2("Lebron", "James");
console.log(result2);
var buildName3 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + lastName;
};
console.log(buildName3("Bob"));
console.log(buildName3("Bod", "Will"));
console.log(buildName3("Lebron", undefined));
// =============
console.log("------------");
var buildName4 = function (firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
};
console.log(buildName4("Bob", "Will", "Leo", "Harry"));
console.log(buildName4("James"));
console.log(buildName4("LEE", "Adam"));
