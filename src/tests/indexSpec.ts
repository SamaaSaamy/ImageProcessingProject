import { resizeImage } from '../controllers/images.controller';
import supertest from 'supertest';
import { app } from '../main'

const request = supertest(app)

describe('Test endpoint for resizing image', async () => {
  it('Best case', async () => {
    const response = await request.get('/images/resize/?height=555&width=666');
    expect(response.status).toBe(200);
    // expect(console.log).toHaveBeenCalledWith("mid1", "mid2", "controller");
    // spyOn(console, 'mid1');

  })

  it('Invalid height', async () => {
    const response = await request.get('/images/resize/?height=f&width=66');
    expect(response.status).toBe(304);
  })

  it('Invalid width', async () => {
    const response = await request.get('/images/resize/?height=500&width=ds');
    expect(response.status).toBe(304);
  })

  it('Image already exist', async () => {
    const response = await request.get('/images/resize/?height=555&width=666');
    expect(response.status).toBe(201);
  })

});