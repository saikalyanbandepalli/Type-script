

let myName:string = "saikalyan";
let no1:number= 1000;
let n02:number = 2000;
let condition1:boolean = true,cond2:boolean = false;

let courses:string[]=["React","Angular","python"];
let breakfast:string[] =["idli","dosa"]

let item:[string,number] = ["samosa",40];

enum days{sun,mon};
let data1 = days.sun;

let information:string | number = 2;

let evenNumber= (num:number)=>{

let result = num%2;
if(result==0){
    return `${num} is even`;
}
return `${num} is odd`
}