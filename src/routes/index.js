import  { Router } from "express";
import userRouter from "./usersRouter.js";
import productsRouter from "./productsRouter.js";
import cartsRouter from "./cartsRouter.js";
const router = Router();


router.use('/users', userRouter);
router.use('/products', productsRouter)
router.use('carts', cartsRouter)


export default router;