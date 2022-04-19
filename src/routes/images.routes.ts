import express, { response } from 'express';
import {checkValues, checkImageAlreadyExist} from '../middleware/utils'
import {resizeImage} from '../controllers/images.controller'
const imagesRoutes = express.Router()

imagesRoutes.get('/image', (request, response) => {
    console.log("hi images")
    response.send("hello all")
})

imagesRoutes.get('/resize/', checkValues, checkImageAlreadyExist, resizeImage)

export default imagesRoutes