import express from 'express';
export const app = express();
app.get('/coffeelover', (req, res) => res.send('I like coffee!'));