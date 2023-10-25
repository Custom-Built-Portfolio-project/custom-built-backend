import { Router } from "express";
import {
  postCategory,
  getCategories,
  getSubcategoriesOfComponentsAndStorage,
} from "../handlers/categoryHandlers/categoryHandlers.js";

const categoryRouter = Router();

// categoryRouter.post("/", postCategory);
// categoryRouter.get("/", getCategories);
categoryRouter.get("/", getSubcategoriesOfComponentsAndStorage);

export default categoryRouter;
