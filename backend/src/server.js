require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');
const path = require('path');

const app = express();
// app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
// app.use(
//   cors({
//     origin: [
//       'http://localhost:3000', // Vue / Nuxt dev
//       'http://192.168.29.67:3000', // Vite
//       'http://127.0.0.1:3000',
//     ],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: [
      'http://localhost:3000', // Vue / Nuxt dev
      'http://192.168.29.67:3000', // Vite
      'http://127.0.0.1:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('DB connected');
    // Sync models (in dev). In prod use migrations
    // await sequelize.sync(); // { force: true } to reset in dev
    await sequelize.sync({ alter: false }); 
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (e) {
    console.error('Failed to start', e);
  }
}

start();
app.get('/api/test', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: '✅ API and DB connection are working!' });
  } catch (err) {
    res.status(500).json({ error: '❌ DB connection failed', details: err.message });
  }
});