import { SafeParseReturnType, SafeParseSuccess, ZodError } from "zod";
import { Post, postSchema } from "./dto";
import { Request, Response, NextFunction } from "express";



export default new class Validator {
    /**
     * Middleware for validating post data before creating a new post
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @param {NextFunction} next - The next function.
     * @returns {Promise<void>}
     */
    async createOne(req: Request, res: Response, next: NextFunction) {
        const { success, error }: any = await postSchema.safeParseAsync(req.body)
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
    /**
     * Middleware for validating post data before updating a post
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @param {NextFunction} next - The next function.
     * @returns {Promise<void>}
     */
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
}