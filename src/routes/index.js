import  { Router } from "express";
import userRouter from "./usersRouter.js";
import productsRouter from "./productsRouter.js";
import cartsRouter from "./cartsRouter.js";
import subTypeRouter from "./subTypeRouter.js";
import categoryRouter from "./categoryRouter.js";
import subCategoryRouter from "./subCategoryRouter.js";


const router = Router();
router.use("/subcategory", subCategoryRouter )
router.use("category", categoryRouter )
router.use("/subtype", subTypeRouter)
router.use('/users', userRouter);
router.use('/products', productsRouter)
router.use('/carts', cartsRouter)



export default router;