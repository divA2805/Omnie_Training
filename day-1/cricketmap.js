const players=[
    {name:"virat kohli",run:83,balls:50},
    {name:"rohit sharma",run:74,balls:40},
    {name:"sachine tendulkar",run:100,balls:70}

]

const strikerate=players.map(p=> p.run * 100/p.balls);
console.log(strikerate);