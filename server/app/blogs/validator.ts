import { SafeParseReturnType, SafeParseSuccess, ZodError  } from "zod";
import { Post, postSchema } from "./dto";
import { Request, Response, NextFunction } from "express";



export default new class Validator {

    async createOne(req: Request, res: Response, next: NextFunction) {
        const { success, error } :any = await postSchema.safeParseAsync(req.body)
        if (!success) {
            return res.status(200).send({
                message: 'data is not correct!',
                success: false,
                status: 401,
                error: error.issues 
            });
        }
        next();
    }
    async updateOne(req: Request, res: Response, next: NextFunction) {
        const { success, error }: any = await postSchema.safeParse(req.body)
        if (!success) {
            return res.status(200).send({
                message: 'data is not correct!',
                success: false,
                status: 401,
                error: error.issues
            })
        }
        next()
    }
    async deleteOne(req: Request, res: Response, next: NextFunction) {
        const { success, error }: any = await postSchema.safeParse(req.body)
        if (!success) {
            return res.status(200).send({
                message: 'data is not correct!',
                success: false,
                status: 401,
                error: error.issues
            })
        }
        next()
    }
}