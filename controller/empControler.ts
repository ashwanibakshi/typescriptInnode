import express from "express";
import User from "../interface";

// tslint:disable-next-line: class-name
class empControll{
    data:User[] = [{name:'abcd',salary:4500}]
    constructor(){}
    getEmpControler=(request:express.Request,response:express.Response)=>{
        this.data.push({name:'demo1',salary:5500});
         response.json(this.data);
    }
}

export default empControll;