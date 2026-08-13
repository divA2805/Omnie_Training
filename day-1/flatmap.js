const n=[2,4,6,8,10,12];
const x=n.flatMap((e)=>[e,e%2,e*10]);
const y=n.flatMap((a)=>a*3);
console.log(x);
console.log(y);

const goldcost=[50000,70000,60000,80000];
const netcost=goldcost.flatMap((c)=>[c,c*0.03 +c,c+c*0.03 +c*0.1]);
console.log(netcost);
    