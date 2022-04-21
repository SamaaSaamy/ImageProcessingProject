import express from "express";
import sharp from "sharp";
import path from "path";

const resizeImage = async (
    request: express.Request,
    response: express.Response
) => {
    try {
        const imageName = request.query.imageName;
        const imagePath = path.resolve(`./images/${imageName}.jpg`);

        await sharp(path.resolve(imagePath))
            .resize(Number(request.query.width), Number(request.query.height))
            .toFile(
                path.resolve(
                    `./ResizedImages/${imageName}_${Number(
                        request.query.width
                    )}_${Number(request.query.height)}.jpg`
                )
            );

        response.type(`image/${"jpg"}`);
        response.status(200);
        response.sendFile(
            path.resolve(
                `./ResizedImages/${request.query.imageName}_${Number(
                    request.query.width
                )}_${Number(request.query.height)}.jpg`
            )
        );
    } catch (error: any) {
        throw new Error(error.toString());
    }
};

export { resizeImage };
