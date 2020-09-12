import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import empRoute from "./routes/empRoutes";

mongoose.connect('mongodb://localhost:27017/typeexpress',{useNewUrlParser:true,useUnifiedTopology:true})
// tslint:disable-next-line: no-console
.then(()=> console.log('connected to db'))
.catch((err)=>console.log(err))


let app = express();
let emp  = new empRoute();

// tslint:disable-next-line: comment-format
//body-parser
app.use(bodyParser.json());

// default pageload
app.get('/',(request:express.Request,response:express.Response)=>{
  response.redirect('/emp/getEmpData');
});

// tslint:disable-next-line: comment-format
//routes
app.use('/emp',emp.router);

let port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`server run at ${port}`));