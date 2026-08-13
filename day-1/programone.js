//Create an array of 5 numbers and use map() to double them
let number=[1,2,3,4,5];

let dd;
console.log(dd);
let duble=number.map((n)=>n*2);
console.log(duble);

//Program -2
const newArr=[2,3,6,567,78,-10,-11];
let fill=newArr.filter((n)=>n>6);
console.log(fill);

//3 Use reduce() to calculate the total price of 3 products.
let prices=[20,30,40,44,60];
let total=prices.reduce((sum,price)=>sum +price,0);

console.log(total);


//•	Create a student object and destructure name and age.

const person={
    name:"Akash",
    age:23,
    salary:75000,
    designation:"Software engineer",
    city:"Delhi",
    company:"Omnie"
}

const {name,company}=person;

console.log("name of employee "+ name+" and he work's in company "+company);


//•	Create a new object using the spread operator

const student={
    name:"Akash",
    age:23,
    college:"DGI"
    
}

const fullDetail={
    ...student,
    comapny:"Omnie",
    Designation:"Intern"

}

console.log(fullDetail);