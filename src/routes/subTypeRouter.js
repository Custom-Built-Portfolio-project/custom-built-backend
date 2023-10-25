import { Router } from "express";
import {postSubType, getSubtypeByName} from "../handlers/subTypeHandlers/subTypesHandlers.js";


const subTypeRouter = Router();

subTypeRouter.post("/", postSubType);
subTypeRouter.get("/", getSubtypeByName);

export default subTypeRouter;
