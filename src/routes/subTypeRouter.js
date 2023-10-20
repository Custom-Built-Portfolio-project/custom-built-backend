import { Router } from "express";
import postSubType from "../handlers/subTypeHandlers/postSubType.js";

const subTypeRouter = Router();

subTypeRouter.post("/", postSubType)

export default subTypeRouter;