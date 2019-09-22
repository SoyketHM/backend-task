const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db/db');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandlers');

// Load Middlewares
app.use(express.json());

// Load Routes
app.use(routes);

// Error handler
app.use(errorHandler.notFound);

// Listen to the Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
