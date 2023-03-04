import express from 'express';
export const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('Welcome to the DrinksAPI!'));
app.get('/coffeelover', (req, res) => res.send('I like coffee!'));
const coffeeType = {drinkType:'Coffee', name:'Latte'}
app.get('/coffee', (req, res) => res.json(coffeeType));
