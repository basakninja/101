const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.post('/payment', (req, res) => {
  // In a real application, payment processing would occur here
  res.json({ status: 'paid', transactionId: '12345' });
});

app.listen(PORT, () => console.log(`Payment service on ${PORT}`));
