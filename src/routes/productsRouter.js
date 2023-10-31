import { Router } from "express";
// Rutas Get
import { getAllProducts } from "../handlers/productsHandler/handlePostProducts.js";
import { getProductsById } from "../handlers/productsHandler/handlePostProducts.js";

import { handlePostProducts } from "../handlers/productsHandler/handlePostProducts.js";
import { updateProducts } from "../handlers/productsHandler/handlePostProducts.js";
import { deleteProducts } from "../handlers/productsHandler/handlePostProducts.js";

const productsRouter = Router();
// Rutas Get
productsRouter.get("/", getAllProducts);
productsRouter.get("/:id", getProductsById);
// Rutas Post
productsRouter.post('/', handlePostProducts)
// Rutas Put
productsRouter.put("/", updateProducts);
// Rutas Delet
productsRouter.delete("/delete", deleteProducts);

module.exports = productsRouter;
