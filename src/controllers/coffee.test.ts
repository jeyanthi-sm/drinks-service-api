import request from 'supertest';
import { app } from '../controllers/coffee';
import express from 'express';
/*
As a user, when I do a GET request to the /coffee endpoint, I will see the JSON
response which includes two properties: the drinkType set to “Coffee” and name set to
the provided name
*/

/*test('GET /coffee should return correct object', async () => {
    const res = await request(app)
    .get('/coffee')
    .query({ coffeeName: 'Latte' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
    drinkType: 'Coffee',
    name: 'Latte',
    });
    });
*/
describe('Test coffee endpoint request with no query parameter', () => {
    test('GET should return correct message', async () => {
        const coffeeType = {drinkType:'Coffee', name:'Latte'}
        const res = await request(app).get('/coffee');
    
    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toEqual({drinkType:'Coffee',
                              name:'Latte'})
    });
    });
    

describe('Test coffee endpoint request', () => {
test('GET should return correct message', async () => {
    const coffeeType = {drinkType:'Coffee', name:'Latte'}
    const res = await request(app).get('/coffee').query({ coffeeName: 'Latte' });

expect(res.statusCode).toEqual(200);

expect(res.body).toEqual({drinkType:'Coffee',
                          name:'Latte'})
});
});

/*
const coffeeType1 = {drinkType:'Coffee', name:'Espresso'}
app.get('/coffee', (req, res) => res.json(coffeeType1));
*/
describe('Test coffee endpoint request with query Espresso', () => {
    test('GET should return correct message', async () => {
        const coffeeType = {drinkType:'Coffee', name:'Espresso'}
        const res = await request(app).get('/coffee').query({ coffeeName: 'Espresso' });
    
    expect(res.statusCode).toEqual(200);
    
    expect(res.body).toEqual({drinkType:'Coffee',
                              name:'Espresso'})
    });
    });


    