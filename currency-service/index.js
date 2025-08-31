const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;

app.get('/convert', (req, res) => {
  const amount = parseFloat(req.query.amount || '0');
  const rate = 0.9; // 1 USD = 0.9 EUR
  res.json({ result: amount * rate });
});

app.listen(PORT, () => console.log(`Currency service on ${PORT}`));
