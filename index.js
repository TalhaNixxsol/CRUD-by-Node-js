const express=require('express');
const bodyParser=require('body-parser');
const route=require('./routes/route');
const helper=require('./helper/helper');
helper()
const app=express();
 app.use(bodyParser.json());

app.use('/',route);

app.listen(3000,()=>{
    console.log("This app is listening at http://localhost:3000")
})