import { Router } from "express";
import postSubCategory from "../handlers/subCategoryHandler.js/postSubCategory.js";

const subCategoryRouter = Router();

subCategoryRouter.post("/", postSubCategory)

export default subCategoryRouter;
