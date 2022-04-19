import express, { response } from 'express';
import path from "path";
import fs from 'fs'

const checkValues = async (request: express.Request, response: express.Response, next: Function) => {
    try {
        console.log("mid1")
        const height: Number = Number(request.query.height)
        const width: Number = Number(request.query.width)

        if (!height || !width) response.send("Enter valid values for width and height")
        else next()
    }
    catch (error: any) { throw new Error(error.toString()) }
};

const checkImageAlreadyExist = async (request: express.Request, response: express.Response, next: Function) => {
    try {
        console.log("mid2")
        let Imagepath: any
        Imagepath = (path.resolve(`G:/ImageProcessingProject/ResizedImages/palmtunnel_${Number(request.query.width)}_${Number(request.query.height)}.jpg`))

        if (fs.existsSync(Imagepath)) response.sendFile(path.resolve(`G:/ImageProcessingProject/ResizedImages/palmtunnel_${Number(request.query.width)}_${Number(request.query.height)}.jpg`))
        else next()
    }
    catch (error: any) { throw new Error(error.toString()) }
};

export  {checkValues, checkImageAlreadyExist}
