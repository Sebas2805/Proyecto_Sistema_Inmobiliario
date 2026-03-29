const express = require('express');
const router = express.Router();
const movimientoController = require('../controllers/movimientoController');

router.get('/movimientos',     movimientoController.getAll);
router.get('/movimientos/:id', movimientoController.getById);
router.post('/movimientos',    movimientoController.create);
router.put('/movimientos/:id', movimientoController.update);
router.delete('/movimientos/:id', movimientoController.delete);

module.exports = router;
