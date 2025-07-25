// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Route Imports
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// ✅ Attach Routes to Endpoints
app.use('/api/auth', authRoutes);           // for login/register
app.use('/api/courses', courseRoutes);      // for course creation, listing, etc.
app.use('/api/payments', paymentRoutes);    // for Mpesa STK Push

// ✅ Test route
app.get('/', (req, res) => {
  res.send('API is running... DigiNest backend is live 🚀');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
