import { log } from "console";
import { Request, Response, NextFunction } from "express";

class Controller {
    login(req:Request, res:Response, next:NextFunction){
        log(req.body)

        res.status(200).send({
            message: '',
            data: '',
            success: true,
            count: 1,

        })
    }
    register(req:Request, res:Response, next:NextFunction){
        log(req.body)

        res.status(200).send({
            message: '',
            data: '',
            success: true,
            count: 1,

        })
    }
    forget(req:Request, res:Response, next:NextFunction){
        log(req.body)

        res.status(200).send({
            message: '',
            data: '',
            success: true,
            count: 1,

        })
    }
}

export default new Controller