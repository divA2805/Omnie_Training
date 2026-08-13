const player=[
    {name:"Virat",test:9000,odi:14900,t20:3400},
    {name:"Sachin",test:15000,odi:18000,t20:400},
    {name:"Rohit",test:4200,odi:13000,t20:3600},

]

const total=player.reduce((n,p)=>n+ p.test,0);

console.log(total);

const virat=[
    {format:"test",run:9200,century:27},
    {format:"odi",run:14800,century:52},
    {format:"t20",run:3400,century:1}
]

const allformat=virat.reduce((t,n)=>t+n.run,0);
console.log(allformat);