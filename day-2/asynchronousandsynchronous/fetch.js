fetch("https://jsonplaceholder.typicode.com/users")
 .then((response)=>response.json())
 .then((data)=>{
    const names=data.map((user)=> user.name+" "+user.id+"|"+user.company.name)
    const newid=data.map((x)=>x.id)
    console.log(names);
    console.log(newid);
 })
 
