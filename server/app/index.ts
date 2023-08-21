import express from "express"
import blogs from "./blogs";
import { green, red } from "colors";
import { log } from "console";
import cors from 'cors';
import { connect } from "mongoose";

const app = express()


export default class Application {
    port: number
    db: string
    constructor({ port, db }: { port: number; db: string }) {
        this.port = port
        this.db = db
        this.configMiddleware()
        this.configMModule()
        this.configDatabase()
        this.configServer()
    }

    configMModule() {
        app.use('/api/v1/posts', blogs)
    }

    async configDatabase() {
        try {
            await connect(this.db)
        } catch (error: unknown) {
            log(red(`${error}`));

        }
    }

    configMiddleware() {
        app.use(cors())
        app.use(express.json())
    }

    configServer() {
        app.listen(this.port, () => {
            log(green(`Server run port: ${this.port}`));
        })
    }


}
