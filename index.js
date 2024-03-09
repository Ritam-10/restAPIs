import express from "express";
import axios from "axios";

const app=express();
const port=3000;

app.use(express.static("public"));
const arr=["Any","Misc", "Programming", "Dark", "Pun", "Spooky", "Christmas"];

app.get("/",(req,res)=>{
    res.render("index.ejs",{data:{}});
})

app.get("/any",async(req,res)=>{
    try{
        const result=await axios.get("https://v2.jokeapi.dev/joke/"+arr[0]);
        res.render("index.ejs",{data:result.data});
       
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/misc",async(req,res)=>{
    try{
        const result=await axios.get("https://v2.jokeapi.dev/joke/"+arr[1]);
        res.render("index.ejs",{data:result.data});
       
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/programming",async(req,res)=>{
    try{
        const result=await axios.get("https://v2.jokeapi.dev/joke/"+arr[2]);
        res.render("index.ejs",{data:result.data});
       
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/dark",async(req,res)=>{
    try{
        const result=await axios.get("https://v2.jokeapi.dev/joke/"+arr[3]);
        res.render("index.ejs",{data:result.data});
       
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/pun",async(req,res)=>{
    try{
        const result=await axios.get("https://v2.jokeapi.dev/joke/"+arr[4]);
        res.render("index.ejs",{data:result.data});
       
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/spooky",async(req,res)=>{
    try{
        const result=await axios.get("https://v2.jokeapi.dev/joke/"+arr[5]);
        res.render("index.ejs",{data:result.data});
       
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/christmas",async(req,res)=>{
    try{
        const result=await axios.get("https://v2.jokeapi.dev/joke/"+arr[6]);
        res.render("index.ejs",{data:result.data});
       
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

//create.ejs page

app.get("/create",(req,res)=>{
    res.render("create.ejs",{data:{}});
})

app.post("/submit",async(req,res)=>{
    try{
        const result=await axios.post("https://v2.jokeapi.dev/submit?dry-run",req.body);
        res.render("create.ejs",{data:JSON.stringify(result.data)});
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
})



  


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})