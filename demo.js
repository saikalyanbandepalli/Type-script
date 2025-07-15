let addition =  (num1,num2) => num1+num2;
console.log(addition(2,3))                                      

function outerfunction(){
  //console.log(x);
  function innerfunction(){
    let x = 333;
  }

};

let c = outerfunction();
//console.log(c);

function demo(){
    let count =1;
    function demo1(){
    count ++;
    //console.log(count);
    }
}

demo()

let person = {
    id:101,
    name:"sai",
    designation:"Full stack developer",
    single:false,
    address: {
        city :"ramnager",
        pin : 41404,
        state:"ap"
    },
    details:function (){
        return `${this.id} ${this.name} ${this.designation} ${this.address.city}`;
    }
}
console.log(person.id)
console.log(`id ${person.id} ${person.name} ${person.single}`);
console.log(person.details);

