fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data)=>{
        const users=data.map((user)=>user.name);
        console.log(users);
    })
    .catch((err)=>{
        console.log("error");
    })
    .finally(()=>{
        console.log("All done")
    })