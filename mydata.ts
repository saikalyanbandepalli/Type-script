export let myFullName:string="saikalyan";

export class Product{
    pId:number
    pName:string;
    pPrice:number;

    constructor(id:number, name:string, prrice:number){
        this.pId= id;
        this.pName= name;
        this.pPrice = prrice;
    }

    productDetails(){
        return `Id:${this.pId} Name:${this.pName} Price:${this.pPrice}`
    }
}