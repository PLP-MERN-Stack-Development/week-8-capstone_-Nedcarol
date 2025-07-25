const express = require('express');
const router = express.Router();
require('dotenv').config();

const paymentProvider = process.env.PAYMENT_PROVIDER;
const paymentKey = process.env.PAYMENT_API_KEY;
const paymentSecret = process.env.PAYMENT_API_SECRET;

// Mock M-Pesa Payment
router.post('/mpesa', async (req, res) => {
  const { phone, amount } = req.body;

  if (!phone || !amount) return res.status(400).json({ error: 'Missing fields' });

  try {
    console.log(`🔐 Using provider: ${paymentProvider}`);
    console.log(`✅ API KEY: ${paymentKey}`);
    // In real integration, you'd use M-Pesa Daraja API here

    // Simulated payment success
    res.status(200).json({
      message: 'M-Pesa payment successful (mock)',
      transactionId: 'MPESA12345678',
      provider: paymentProvider,
    });
  } catch (err) {
    console.error('❌ Payment error:', err);
    res.status(500).json({ error: 'Payment failed' });
  }
});

module.exports = router;
