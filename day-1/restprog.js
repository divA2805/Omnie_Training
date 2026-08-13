const user = {
    name: "akash",
    age: 23,
    city: "Delhi",
    company:"Omnie"
};

const { name,age, ...rest } = user;

console.log(name);
console.log(rest);


const number={a:1,b:2,c:3};
const {a,...next}=number;
console.log(a);
console.log(next);

//it is also use in destructing the objects and it is generalkyy use to collect indefinite no. of argument into a single object or array

const players=[
    "rohit","Shubhman","virat","Ishan kishan","SHreyas Iyer","Bumrah","Bhuvneshwar"
]

const [captain,vice_captain,...remain]=players;
console.log(captain);
console.log(vice_captain),
console.log(remain);