const funController    = require('./controllers/funController');
const router           = require('express').Router();
const { catchErrors }  = require('./middlewares/errorHandlers');

// Check Route
router.get('/', (req, res) => res.send('Hello World!'));

// POST Route
router.post('/add', catchErrors(funController.addStrings));

// GET Route
router.get('/list', catchErrors(funController.getStrings));

module.exports = router;
