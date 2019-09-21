const express = require('express');
const routes = require('./routes');
const app = express();
const errorHandler = require('./middlewares/errorHandlers');
// const db = require('./db/db');

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
