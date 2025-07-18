function myValue(data)
{
    console.log (`myvalue is a : ${data}`);
}
//myValue("going");

let myPromises = new Promise((resolve,reject)=>{
    let x =0;
    resolve("this is ok");
    if(x===0){
        //console.log("promise is solved");
        
    }
    else{
        console.log("promise is not solved");
    }
},10);


function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('code is resolved');
        },2000);
    });
};
async function greeting(){
    let data = await getData();
    console.log(data);
}

greeting();


async function fetchdata(){
    try{
        let result = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await result.json();
        console.log(data);
    }
    catch(error){
        console.log(error.message);
    }
}

//tchdata();


