import express from "express";

const app = express();
console.log("hello");

app.listen(8800, ()=>console.log("server is running"))

app.use("/api/test", (req, res)=>{
    res.send("it works")
})