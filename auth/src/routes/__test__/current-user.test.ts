import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {

    let userCookie = await global.signin();  

    const resWithUser = await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', userCookie)
        .send()
        .expect(200);

    expect(resWithUser.body.currentUser.email).toEqual('test@test.com')    
});

it('responds with null if not authenticated', async ()=>{
    const response = await request(app)
        .get('/api/users/currentuser')
        .send()
        .expect(200);

    expect(response.body.currentUser).toEqual(null)
})