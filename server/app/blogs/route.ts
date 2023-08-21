import { Router } from "express";
import controller from "./controller";
import validator from "./validator";

const router = Router()



router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', validator.createOne, controller.createOne)
router.put('/:id', validator.updateOne, controller.updateOne)
router.delete('/:id', controller.deleteOne)

export default router