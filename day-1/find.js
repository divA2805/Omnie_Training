const age=[13,15,3,56,34,16,99,100,87];

const fifty=age.find((a)=>a>50);

const fiftyindex=age.findIndex((a)=>a>50);
const fiftylast=age.findLast((a)=>a>50);
console.log(fifty);
console.log(fiftyindex);

console.log(fiftylast);