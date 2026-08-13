const nike={
    name:"Nike",
    type:"Air Jordan",
    price:10000,
    stock:20
}


const newdesign={
    ...nike,
    type:"Sneakers",
    price:5000,
    stock:20
}
const {name,...rest}=nike;
const {stock,...next}=newdesign;

console.log(name);
console.log(rest);
console.log(next);