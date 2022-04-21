import express from "express";
import path from "path";
import fs from "fs";

const checkValues = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => {
    try {
        const height: Number = Number(request.query.height);
        const width: Number = Number(request.query.width);

        if (!height || !width) {
            response.status(304);
            response.send("Enter valid values for width and height");
        } else next();
    } catch (error: any) {
        throw new Error(error.toString());
    }
};

const checkImageAlreadyExist = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => {
    try {
        const Imagepath = path.resolve(
            `./ResizedImages/${request.query.imageName}_${Number(
                request.query.width
            )}_${Number(request.query.height)}.jpg`
        );

        if (fs.existsSync(Imagepath)) {
            response.status(201);
            response.sendFile(
                path.resolve(
                    `./ResizedImages/${request.query.imageName}_${Number(
                        request.query.width
                    )}_${Number(request.query.height)}.jpg`
                )
            );
        } else next();
    } catch (error: any) {
        throw new Error(error.toString());
    }
};

const checkImageName = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => {
    try {
        const imageName = request.query.imageName;
        const imagePath = path.resolve(`./images/${imageName}.jpg`);

        if (!fs.existsSync(imagePath)) {
            response.status(404);
            response.send("This image name doesn't exist");
        } else next();
    } catch (error: any) {
        throw new Error(error.toString());
    }
};

// const requiredFields = async (fields: string []) => {
//     return async function (request: express.Request, response: express.Response, next: express.NextFunction) {
//         for await (let field of fields) {
//             if (!request.body.hasOwnProperty(field)) {
//                 response.status(400);
//                 response.send(`please enter a ${field}`)
//             }
//         }
//         next()
//     }
// }

export { checkValues, checkImageAlreadyExist, checkImageName };
