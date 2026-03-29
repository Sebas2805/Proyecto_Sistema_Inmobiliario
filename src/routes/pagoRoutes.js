const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pagoController');

router.get('/pagos',     pagoController.getAll);
router.get('/pagos/:id', pagoController.getById);
router.post('/pagos',    pagoController.create);
router.put('/pagos/:id', pagoController.update);
router.delete('/pagos/:id', pagoController.delete);

module.exports = router;
