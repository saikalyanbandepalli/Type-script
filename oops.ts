class Employee1{
    eId: number = 101;
    eName: string = "saikalyan";
    eSalary: number = 96000;
    issingle:boolean;
    
    constructor(Id:number,name:string,salary:number,issingle:boolean){
        this.eId=Id;
        this.eName=name;
        this.eSalary=salary;
        this.issingle=issingle;
    }

    employeeDetails(){
        return `this is with ${this.eId} Name:${this.eName}`;
    }
}

// let empObj = new Employee1();
// console.log(empObj.eId);
// console.log(empObj.eName);


let empObj2 = new Employee1(102, "Raja", 87000, true);
console.log(empObj2.eName);
console.log(empObj2.employeeDetails());

// let empObj3 = new Employee1(103, "Sanjay", 90000, true);
// console.log(empObj3Name);
// console.log(empObj1.employeeDetails());