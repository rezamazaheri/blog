import express from "express"
// import blogs from "./blogs";
import { green } from "colors";
import { log } from "console";
const app = express()


export default class Application {
    port: number
    db: string
    constructor({port, db}:{port: number; db: string}){
        this.port = port
        this.db = db
        this.configMModule()
        this.configServer()
    }

    configMModule(){
        // app.use('/api/v1/blogs', blogs)
    }

    configServer(){
        app.listen(this.port, ()=>{
            log(green(`Server run port: ${this.port}`));
        })
    }

    
}
