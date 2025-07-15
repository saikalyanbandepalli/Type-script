var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary() {
    }
    Object.defineProperty(EmployeeSalary.prototype, "_employee", {
        get: function () {
            return this.employee;
        },
        set: function (val) {
            this.employee = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeSalary.prototype, "_employeeID", {
        get: function () {
            return this.employeeID;
        },
        set: function (val) {
            this.employeeID = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeSalary.prototype, "_employeeName", {
        get: function () {
            return this.employeeName;
        },
        set: function (val) {
            this.employeeName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeSalary.prototype, "_basicSalary", {
        get: function () {
            return this.basicSalary;
        },
        set: function (val) {
            this.basicSalary = val;
        },
        enumerable: false,
        configurable: true
    });
    EmployeeSalary.prototype.userDetails = function () {
        return "HRA (20% of Basic Salary):".concat(20 / 100 * this.basicSalary, "\n \nDA (10% of Basic Salary):").concat(10 / 100 * this.basicSalary, "\n \nGross Salary = Basic + HRA + DA").concat(this._basicSalary + 20 / 100 * this.basicSalary + 10 / 100 * this.basicSalary);
    };
    return EmployeeSalary;
}());
var empobj = new EmployeeSalary();
empobj._basicSalary = 50000;
empobj._employee = "sai";
empobj._employeeID = 1;
empobj._employeeName = "saidd";
console.log(empobj.userDetails());
