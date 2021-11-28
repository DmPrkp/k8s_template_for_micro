import request from 'supertest';
import { app } from '../../app';

it('return 201 on success', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password',
        })
        .expect(201);
})

it('return 400 on invalid value', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test',
            password: 'p',
        })
        .expect(400);

     await request(app)
        .post('/api/users/signup')
        .send({})
        .expect(400);
})

it('disallows duplicate emails', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({email: 'test@test.com', password: 'password'})
        .expect(201);

    await request(app)
        .post('/api/users/signup')
        .send({email: 'test@test.com', password: 'password'})
        .expect(400);
});

it('set cookie after successfull signup', async () => {
   const response = await request(app)
        .post('/api/users/signup')
        .send({email: 'test@test.com', password: 'password'})
        .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
});