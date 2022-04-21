import express from "express";
import imagesRoutes from "./images.routes";

const routes = express.Router();

routes.use("/images", imagesRoutes);

export default routes;
