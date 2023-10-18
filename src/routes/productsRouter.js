import { Router } from "express";
import { handlePostProducts } from "../handlers/productsHandler/handlePostProducts.js";

const productsRouter = Router();

productsRouter.post('/', handlePostProducts)

export default productsRouter;
