import { Router } from "express";
import { handlePostProducts } from "../handlers/productsHandler/productsHandlers.js";

const productsRouter = Router();

productsRouter.post('/', handlePostProducts)

export default productsRouter;
