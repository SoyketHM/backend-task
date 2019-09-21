const funController        = require('./controllers/funController');
const router           = require('express').Router();
const { catchErrors }  = require('./middlewares/errorHandlers');

// Check Routes
router.get('/', (req, res) => res.send('Hello World!'));

// Users Routes
router.post('/add', catchErrors(funController.addString));

module.exports = router;
