import { Router } from "express";
import postCategory from "../handlers/categoryHandlers/postCategory.js";

const categoryRouter = Router();

categoryRouter.post("/", postCategory)

export default categoryRouter;