import { log } from "console";
import { Request, Response, NextFunction } from "express";
import model from "./model";
import { isNull, isUndefined, pick, size } from "lodash";
import { FilterQuery } from "mongoose";

export default new class Controller {
  /**
 * Get all posts
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 * @returns {Promise<void>}
 */
  async getAll(req: Request, res: Response, next: NextFunction) {
    const blogs = await model.find()
    res.status(200).send({
      message: 'All Post!',
      count: size(blogs),
      success: true,
      status: 200,
      data: blogs
    })
  }
  async getOne(req: Request, res: Response, next: NextFunction) {
    const blog = await model.findById(req.params.id)
    if (isUndefined(blog)) {
      return res.status(401).send({ message: 'Your blog not found!' })
    }
    res.status(200).send({
      message: 'Post found!',
      success: true,
      status: 200,
      data: blog
    })
  }
  /**
* Update one post
* @param {Request} req - The request object.
* @param {Response} res - The response object.
* @param {NextFunction} next - The next function.
* @returns {Promise<void>}
*/
  async createOne(req: Request, res: Response, next: NextFunction) {
    const data = pick(req.body, ['title', 'image', 'caption', 'excerpt'])
    const result = await model.create(data)
    res.status(201).send({
      message: 'Post created!',
      success: true,
      status: 201,
      data: result
    })
  }
  /**
 * Update one post
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 * @returns {Promise<void>}
 */
  async updateOne(req: Request, res: Response, next: NextFunction) {
    const data = pick(req.body, ['title', 'image', 'caption', 'excerpt'])
    const id = req.params.id
    const result = await model.findByIdAndUpdate(id, data)
    if (isNull(result)) {
      return res.status(404).send({
        message: 'can not found post!',
        success: false,
        status: 404,
      })
    }
    res.status(201).send({
      message: 'Post updated!',
      success: true,
      status: 201,
      data: result
    })
  }
  /**
 * Delete one post
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 * @returns {Promise<void>}
 */
  async deleteOne(req: Request, res: Response, next: NextFunction) {
    const result = await model.findByIdAndRemove(req.params.id)
    if (isNull(result)) {
      return res.status(404).send({
        message: 'can not found post!',
        success: false,
        status: 404,
      })
    }
    res.status(201).send({
      message: 'Post deleted!',
      success: true,
      status: 201,
      data: result
    })
  }
}