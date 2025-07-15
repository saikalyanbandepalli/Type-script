var Employee1 = /** @class */ (function () {
    function Employee1(Id, name, salary, issingle) {
        this.eId = 101;
        this.eName = "saikalyan";
        this.eSalary = 96000;
        this.eId = Id;
        this.eName = name;
        this.eSalary = salary;
        this.issingle = issingle;
    }
    Employee1.prototype.employeeDetails = function () {
        return "this is with ".concat(this.eId, " Name:").concat(this.eName);
    };
    return Employee1;
}());
// let empObj = new Employee1();
// console.log(empObj.eId);
// console.log(empObj.eName);
var empObj2 = new Employee1(102, "Raja", 87000, true);
console.log(empObj2.eName);
console.log(empObj2.employeeDetails());
// let empObj3 = new Employee1(103, "Sanjay", 90000, true);
// console.log(empObj3Name);
// console.log(empObj1.employeeDetails());
