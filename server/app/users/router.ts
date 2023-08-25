import { Router } from "express";
import controller from "./controller";
import validator from "./validator";
const router = Router()


router.post('/login',validator.login, controller.login)
router.post('/register',validator.register, controller.register)
router.post('/forget',validator.forget, controller.forget)

export default router