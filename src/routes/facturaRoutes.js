const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController');

router.get('/facturas',     facturaController.getAll);
router.get('/facturas/:id', facturaController.getById);
router.post('/facturas',    facturaController.create);
router.put('/facturas/:id', facturaController.update);
router.delete('/facturas/:id', facturaController.delete);

module.exports = router;
