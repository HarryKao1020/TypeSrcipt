"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = value;
            }
            else {
                console.log("Error : unauthorized update of employee!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
var employee = new Employee();
employee.fullName = "Bob smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
