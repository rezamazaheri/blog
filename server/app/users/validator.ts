import { Request, Response, NextFunction } from "express";
import { userSchema } from "./dto";

export default new class Validator {
    async login(req: Request, res: Response, nex: NextFunction){
        const {success, error} :any = await userSchema.safeParseAsync(req.body)
        if(!success){
            return res.status(404).send({
                success: false,
                error: error.issues,
                message: '',
                status: 404
            })
        }
    }
    async register(req: Request, res: Response, nex: NextFunction){
        const {success, error} :any = await userSchema.safeParseAsync(req.body)
        if(!success){
            return res.status(404).send({
                success: false,
                error: error.issues,
                message: '',
                status: 404
            })
        }
    }
    async forget(req: Request, res: Response, nex: NextFunction){
        const {success, error} :any = await userSchema.safeParseAsync(req.body)
        if(!success){
            return res.status(404).send({
                success: false,
                error: error.issues,
                message: '',
                status: 404
            })
        }
    }
}