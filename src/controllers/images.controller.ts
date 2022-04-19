import express, { response } from 'express';
import sharp from 'sharp';
import fs from 'fs'
import path from "path";

const resizeImage = async (request: express.Request, response: express.Response) => {
    try {
        console.log("controller")
        await sharp(path.resolve('src/public/images/palmtunnel.jpg')).resize(Number(request.query.width), Number(request.query.height)).toFile(path.resolve(`G:/ImageProcessingProject/ResizedImages/palmtunnel_${Number(request.query.width)}_${Number(request.query.height)}.jpg`))

        response.type(`image/${'jpg'}`)
        response.sendFile(path.resolve(`G:/ImageProcessingProject/ResizedImages/palmtunnel_${Number(request.query.width)}_${Number(request.query.height)}.jpg`))
    }
    catch (error: any) { throw new Error(error.toString()) }
};

export {resizeImage}