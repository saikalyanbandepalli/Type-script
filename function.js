function a(b){
    console.log("this is fucntionm one");
    b();
}
function b(){
    setTimeout(()=>{
    console.log("this is fucntion two");
    },2000);
}
function c(){
console.log("this is fucntion three");
}

a(b);
b();
c();


try{
//console.log(3/0);
throw ("this is an erroe");
}
catch(err){
console.log (err);
}