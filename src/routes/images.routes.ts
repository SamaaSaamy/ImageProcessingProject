import express, { response } from 'express';
const imagesRoutes = express.Router()

imagesRoutes.get('/image', (request, response)=>{
    console.log("hi images")
    response.send("hello all")
})


export  default imagesRoutes