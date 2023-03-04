import express from 'express';
export const app = express();
const coffeeType = {drinkType:'Coffee', name:'Latte'}
app.get('/coffee', (req, res) => res.json(coffeeType));
