interface studentdetails{
 userDetails();
 
}
class Student implements studentdetails {
   private name: string;
    private roll: number;
    private mark1: number;
    private mark2: number;
    private mark3: number;
    


    get _name() {
        return this.name;
    }
    set _name(val: string) {
        this.name= val;
    }

    get _roll() {
        return this.roll;
    }
    set _roll(val: number) {
        this.roll = val;
    }

    get _mark1() {
        return this.mark1;
    }
    set _mark1(val: number) {
        this.mark1= val;
    }

     get _mark2() {
        return this.mark1;
    }
    set _mark2(val: number) {
        this.mark1= val;
    }

     get _mark3() {
        return this.mark1;
    }
    set _mark3(val: number) {
        this.mark1= val;
    }

    

    

    userDetails() {
        return `total, average, and grade are ${this.mark1+this._mark2+this._mark3}  ${this.mark1+this._mark2+this._mark3/3}  `;
    }
}

let stuobj = new Student();



console.log(stuobj.userDetails());
