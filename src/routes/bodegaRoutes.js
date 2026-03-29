const express = require('express');
const router = express.Router();
const bodegaController = require('../controllers/bodegaController');

router.get('/bodegas',     bodegaController.getAll);
router.get('/bodegas/:id', bodegaController.getById);
router.post('/bodegas',    bodegaController.create);
router.put('/bodegas/:id', bodegaController.update);
router.delete('/bodegas/:id', bodegaController.delete);

module.exports = router;
