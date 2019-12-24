const router = require('express').Router();

const indexController = require('./controllers/indexController');

router.get('/', (req, res) => {
    indexController.generateWord(req, res);
});

module.exports = router;