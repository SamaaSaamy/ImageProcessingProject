"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var utils_1 = require("../middleware/utils");
var images_controller_1 = require("../controllers/images.controller");
var imagesRoutes = express_1.default.Router();
imagesRoutes.get('/image', function (request, response) {
    console.log("hi images");
    response.send("hello all");
});
imagesRoutes.get('/resize/', utils_1.checkValues, utils_1.checkImageAlreadyExist, images_controller_1.resizeImage);
exports.default = imagesRoutes;
