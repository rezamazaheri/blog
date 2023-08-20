import { z } from "zod";
import { postSchema } from "./dto";
import { Request, Response, NextFunction } from "express";
export default new class Validator {

    async createOne(req: Request, res: Response, next: NextFunction){
        const {success} = await postSchema.safeParse(req.body)
        if(!success){
            const {success, error } :any = await postSchema.safeParse(req.body)
            if(!success){
                return res.status(200).send({
                    message: 'data is not correct!',
                    success: false,
                    status: 401,
                    error: error.issues
                  })
            }
        }
        next()
    }
    async updateOne(req: Request, res: Response, next: NextFunction){
        const {success} = await postSchema.safeParse(req.body)
        if(!success){
            return res.status(401).send('data bad')
        }
    }
    async deleteOne(req: Request, res: Response, next: NextFunction){
        const {success} = await postSchema.safeParse(req.body)
        if(!success){
            return res.status(401).send('data bad')
        }
    }
  }