const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Core middlewares
app.use(cors({
    origin: 'https://chandanchaudhary.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
	res.json({ ok: true, service: 'mywebsite-backend' });
});

// Routes
app.use('/api/contact', contactRoutes);

module.exports = app;