const express = require('express');
const app = express();
const router = express.Router();

const moviesController = require('../controllers/moviesController.js');

router.get('/', (req, res) => {
    moviesController.index(req, res);
});
router.get('/add', (req, res) => {
    moviesController.add(req, res);
});
router.post('/store', (req, res) => {
    moviesController.store(req, res);
});
router.get('/edit/:id', (req, res) => {
    moviesController.edit(req, res);
});
router.post('/update/:id', (req, res) => {
    moviesController.update(req, res);
});
router.get('/delete/:id', (req, res) => {
    moviesController.delete(req, res);
});

module.exports = router;