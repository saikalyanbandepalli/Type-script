class EmployeeSalary {
    private employee: string;
    private employeeID: number;
    private employeeName: string;
    private basicSalary: number;

    get _employee() {
        return this.employee;
    }
    set _employee(val: string) {
        this.employee = val;
    }

    get _employeeID() {
        return this.employeeID;
    }
    set _employeeID(val: number) {
        this.employeeID = val;
    }

    get _employeeName() {
        return this.employeeName;
    }
    set _employeeName(val: string) {
        this.employeeName = val;
    }

    set _basicSalary(val: number) {
        this.basicSalary = val;
    }

    get _basicSalary() {
        return this.basicSalary;
    }

    userDetails() {
        return `HRA (20% of Basic Salary):${20/100* this.basicSalary}
 
DA (10% of Basic Salary):${10/100* this.basicSalary}
 
Gross Salary = Basic + HRA + DA${this._basicSalary+20/100* this.basicSalary+10/100* this.basicSalary}`;
    }
}

let empobj = new EmployeeSalary();
empobj._basicSalary = 50000;
empobj._employee = "sai";
empobj._employeeID = 1;
empobj._employeeName = "saidd";

console.log(empobj.userDetails());
