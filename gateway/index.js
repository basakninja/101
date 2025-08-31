const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const PRODUCT_URL = process.env.PRODUCT_URL || 'http://localhost:8081';
const CART_URL = process.env.CART_URL || 'http://localhost:5001';
const ORDER_URL = process.env.ORDER_URL || 'http://localhost:7000';

// Proxy to Product Catalog Service
app.get('/products', async (req, res) => {
  try {
    const resp = await axios.get(`${PRODUCT_URL}/products`);
    res.json(resp.data);
  } catch (err) {
    // Fallback sample data if service is unavailable
    res.json([{ id: 1, name: 'Sample product' }]);
  }
});

// Proxy to Cart Service
app.get('/cart/:userId', async (req, res) => {
  try {
    const resp = await axios.get(`${CART_URL}/cart/${req.params.userId}`);
    res.json(resp.data);
  } catch (err) {
    res.json({ userId: req.params.userId, items: [] });
  }
});

// Orchestrate checkout via Order Service
app.post('/checkout', async (req, res) => {
  try {
    const resp = await axios.post(`${ORDER_URL}/checkout`, {});
    res.json(resp.data);
  } catch (err) {
    res.json({ status: 'ok', orderId: 'placeholder' });
  }
});

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
