import express from "express";
import {
    checkValues,
    checkImageAlreadyExist,
    checkImageName
} from "../middleware/utils";
import { resizeImage } from "../controllers/images.controller";
const imagesRoutes = express.Router();

imagesRoutes.get(
    "/image",
    (request: express.Request, response: express.Response): void => {
        console.log("hi images");
        response.send("hello all");
    }
);

imagesRoutes.get(
    "/resize/",
    checkImageName,
    checkValues,
    checkImageAlreadyExist,
    resizeImage
);

export default imagesRoutes;
