import { log } from "console";
import { Request,Response, NextFunction } from "express";
import model from "./model";
import { isUndefined, pick, size } from "lodash";

export default new class Controller {
  async getAll(req: Request, res: Response, next: NextFunction){
    const blogs = await model.find()
    res.status(200).send({
      message: 'All product!',
      count: size(blogs),
      success: true,
      status: 200,
      data: blogs
    })
  }
  async getOne(req: Request, res: Response, next: NextFunction){
    const blog = await model.findById(req.params.id)
    if(isUndefined(blog)){
      return res.status(401).send({ message: 'Your blog not found!' })
    }
    res.status(200).send({
      message: 'product found!',
      success: true,
      status: 200,
      data: blog
    })
  }
  async createOne(req: Request, res: Response, next: NextFunction){
    const data = pick(req.body , ['title','image','caption','excerpt'])
    const result = await model.create(data)
    res.status(201).send({
      message: 'product created!',
      success: true,
      status: 201,
      data: result
    })
  }
  async updateOne(req: Request, res: Response, next: NextFunction){
    const data = pick(req.body , ['title','image','caption','excerpt'])
    const result = await model.findOneAndUpdate(req.params.id, data)
    res.status(201).send({
      message: 'product updated!',
      success: true,
      status: 201,
      data: req.body
    })
  }
  async deleteOne(req: Request, res: Response, next: NextFunction){
    const result = await model.findByIdAndDelete(req.params.id) 
    res.status(201).send({
      message: 'product deleted!',
      success: true,
      status: 201,
      data: result
    })
  }
}