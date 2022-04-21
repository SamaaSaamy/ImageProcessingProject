import supertest from "supertest";
import { app } from "../main";

const request = supertest(app);

describe("Test endpoint for resizing image", async () => {
    it("Best case", async () => {
        const response = await request.get(
            "/images/resize/?imageName=santamonica&height=1000&width=10000"
        );
        expect(response.status).toBe(200);
    });

    it("Invalid height", async () => {
        const response = await request.get(
            "/images/resize/?imageName=santamonica&height=f&width=20000"
        );
        expect(response.status).toBe(304);
    });

    it("Invalid width", async () => {
        const response = await request.get(
            "/images/resize/?imageName=santamonica&height=2000&width=d"
        );
        expect(response.status).toBe(304);
    });

    // it('Image already exist', async () => {
    //   const response = await request.get('/images/resize/?imageName=santamonica&height=1000&width=20000');
    //   expect(response.status).toBe(201);
    // })

    it("Image name not found", async () => {
        const response = await request.get(
            "/images/resize/?imageName=v&height=2000&width=20000"
        );
        expect(response.status).toBe(404);
    });
});
