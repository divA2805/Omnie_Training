// arr=[{name:'a',age:21},{name:'b',age:22},{name:'c',age:25}]

const arr=[
    {name:'a',age:21},
    {name:'b',age:22},
    {name:'c',age:25}
];


const y=arr.map((e)=>{
    return {...e,course:"B.Tech"}
});
console.log(y);