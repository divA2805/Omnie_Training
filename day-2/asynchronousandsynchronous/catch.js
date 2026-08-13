const promise=new Promise((res,rej)=>{
    rej("Food not delivered");
})

promise.then((r)=>{
    console.log(r);
}).catch((e)=>{
    console.log(e);
})