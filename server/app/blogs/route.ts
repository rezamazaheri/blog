import { Router } from "express";
import controller from "./controller";

const router = Router()



router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.createOne)
router.put('/:id', controller.updateOne)
router.delete('/:id', controller.deleteOne)

export default router