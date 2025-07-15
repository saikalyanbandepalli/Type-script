interface Iperson{
    personDetails();
}

class Organization implements Iperson{
    pName:string;
    pContact:number;
    pAddress:string;

    constructor(name:string,contact:number,address:string){
        this.pName = name;
        this.pContact = contact;
        this.pAddress = address;
    }
    personDetails(){
        return `Name:${this.pName} Contact:${this.pContact}`;
    }
}

    let OrganizationObj = new Organization("varun",12345,"pune");
    console.log(OrganizationObj.personDetails());
