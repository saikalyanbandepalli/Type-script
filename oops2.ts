class Employee {
    eId: number;
    eName: string;
    eSalary: number;
    eSingle: boolean;

    constructor(id: number, name: string, salary: number, single: boolean) {
        this.eId = id;
        this.eName = name;
        this.eSalary = salary;
        this.eSingle = single;
    }
}

class Company extends Employee {
    cName: string;
    cAddress: string;

    constructor(id: number, name: string, salary: number, single: boolean, compName: string, compAddr: string) {
        super(id, name, salary,single);
        this.cName = compName;
        this.cAddress = compAddr;
    }

    employeeDetails() {
        return `Id: ${this.eId} Name: ${this.eName} Salary: ${this.eSalary} Single: ${this.eSingle} Company Name: ${this.cName} Address: ${this.cAddress}`;
    }
}

let companyObj = new Company(201, "Anmol", 95000, false, "Changepond", "Chennai");
console.log(companyObj.employeeDetails());
