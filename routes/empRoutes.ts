import express, { request, response } from "express";
import empControll from "../controller/empControler";

class empRoute{
    public router = express.Router();
    public empCont = new empControll();
    constructor(){
    this.router.get('/getEmpData',this.empCont.getEmpControler);
    }
}

export default empRoute;