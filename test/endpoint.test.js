const request = require('supertest');

const app = require('../src/app');

describe('Home endpoints', () => {
  it('should respond with 422 status code because validation error', async () => {
    const res = await request(app).post('/api/v1/homes').send({
      name: 'third',
      devices: [],
      sad: 'sd',
    });

    expect(res.statusCode).toEqual(422);
  });

  it('should create a new home', async () => {
    const res = await request(app).post('/api/v1/homes').send({
      name: 'third',
      devices: [],
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should get 1 home', async () => {
    const res = await request(app).get('/api/v1/homes/2');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all homes', async () => {
    const res = await request(app).get('/api/v1/homes');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
  });

  it('should update a home', async () => {
    const res = await request(app).put('/api/v1/homes/2').send({
      name: 'good',
    });

    expect(res.statusCode).toEqual(200);
  });

  it('should delete a home', async () => {
    const res = await request(app).delete('/api/v1/homes/2');

    expect(res.statusCode).toEqual(200);
  });

  it('should respond with status code 404 if home is not found', async () => {
    const res = await request(app).get('/api/v1/homes/2');

    expect(res.statusCode).toEqual(404);
  });
});

describe('Device endpoints', () => {
  it('should respond with 422 status code because validation error', async () => {
    const res = await request(app)
      .post('/api/v1/homes/1/devices')
      .send({
        name: 'Oven',
        status: true,
        type: 'oven',
        image: '',
        temp: {
          max: 0,
          current: 0,
          step: 0,
        },
        modes: [],
        currentMode: '',
      });

    expect(res.statusCode).toEqual(422);
  });

  it('should create a new device', async () => {
    const res = await request(app)
      .post('/api/v1/homes/1/devices')
      .send({
        name: 'Oven',
        status: true,
        type: 'oven',
        image: '',
        temp: {
          min: 0,
          max: 0,
          current: 0,
          step: 0,
        },
        modes: [],
        currentMode: '',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should get 1 device', async () => {
    const res = await request(app).get('/api/v1/homes/1/devices/1');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all devices', async () => {
    const res = await request(app).get('/api/v1/homes/1/devices');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body).toHaveProperty('page');
  });
  it('should update a device', async () => {
    const res = await request(app)
      .put('/api/v1/homes/1/devices/1')
      .send({
        name: 'Oven',
        status: false,
        type: 'oven',
        image: '',
        temp: {
          min: 0,
          max: 0,
          current: 0,
          step: 0,
        },
        modes: [],
        currentMode: '',
      });

    expect(res.statusCode).toEqual(200);
  });

  it('should delete a device', async () => {
    const res = await request(app).delete('/api/v1/homes/1/devices/1');

    expect(res.statusCode).toEqual(200);
  });

  it('should respond with status code 404 if device is not found', async () => {
    const res = await request(app).get('/api/v1/homes/1/devices/1');

    expect(res.statusCode).toEqual(404);
  });
});
