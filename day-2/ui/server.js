const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hii it is express");
})

app.get("/login",(req,res)=>{
    res.send("Login Page");
})

app.get("/users", async (req, res) => {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    const names = data.map((user) => user.id+" "+user.name);

    res.send(names.join("<br>"));
});

app.listen(3000,()=>{
    console.log("Port run on 3000");
});

