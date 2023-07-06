const express=require('express');
const app=express();
app.use(express());

app.post('/create',(req,res)=>{
    console.log("create api hit....")
    res.status(200).json({
        message: "hitting create api...."
    })
})






app.listen(3000,()=>{
    console.log("This app is listening at http://localhost:3000")
})