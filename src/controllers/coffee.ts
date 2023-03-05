import express from 'express';
export const app = express();
const coffeeType = {drinkType:'Coffee', name:'Latte'}
app.get('/coffee', (req, res) => {
    const drinkType  = 'Coffee';
    const name = req.query.coffeeName;
    if ((req.query.coffeeName === null) || (req.query.coffeeName === undefined))
        res.json(coffeeType);
    else
      res.json({drinkType: drinkType, name:name});
})
