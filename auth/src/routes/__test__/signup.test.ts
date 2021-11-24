import request from 'supertest';
import { app } from '../../app';

it('return 201 on success', async () => {
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.te',
        password: 'password'
    })
    .expect(201);
})