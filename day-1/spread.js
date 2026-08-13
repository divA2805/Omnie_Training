

const recordodi={
    odi_run:14900,
    odi_match:300,
    century:51,
    fifty:71
}
const {odi_run,century}=recordodi;
console.log(century);
const recordtest={
    ...recordodi,
    test_run:9230,
    test_match:120
}

const record={
    
    t20_run:3400,
    t20_match:70,
    ...recordtest
}
console.log(record);
const phone={
    name:"iphone17",
    model:"Pro",
    stock:20
}

const updateStock={
    stock:10,
    ...phone
    
}
console.log(updateStock);
console.log(recordodi.odi_run);