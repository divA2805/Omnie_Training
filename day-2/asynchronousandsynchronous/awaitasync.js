async function user(){
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const data= await res.json()
        const names=data.map((user)=>user.name+"| "+user.id+"|"+user.company.name);
        console.log(names);
    }catch(err){
        console.log("Page Not found");
    }
}

user();