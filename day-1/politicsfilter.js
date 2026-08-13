const candidates=[
    {name:"Modi",vote:7000},
    {name:"Mamata Baneerjee",vote:8000},
    {name:"Arvind kejriwal",vote:10000},
    {name:"Rahul",vote:70000},
    {name:"Owasi",vote:200},
    {name:"Maan Singh",vote:1000}
]

const dominate=candidates.filter((x)=>x.vote<7500);
console.log(dominate);