const express = require('express');
const router = express.Router();
const ordenController = require('../controllers/ordenController');

router.get('/ordenes',     ordenController.getAll);
router.get('/ordenes/:id', ordenController.getById);
router.post('/ordenes',    ordenController.create);
router.put('/ordenes/:id', ordenController.update);
router.delete('/ordenes/:id', ordenController.delete);

module.exports = router;
