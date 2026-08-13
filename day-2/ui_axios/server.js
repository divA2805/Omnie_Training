import express from "express";
import axios from "axios";

const app = express();

app.get("/users", async (req, res) => {
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    const names = data.map(({ name }) => name);

    res.send(names.join("<br>"));
});
app.get("/id",async(req,res)=>{
    const {data}=await axios.get("https://jsonplaceholder.typicode.com/users");
    const ids=data.map(({id})=>id);

    res.send(ids.join("<br>"))
})
app.listen(3000, () => {
    console.log("Server running on 3000");
});
