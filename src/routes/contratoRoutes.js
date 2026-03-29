const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratoController');

router.get('/contratos',     contratoController.getAll);
router.get('/contratos/:id', contratoController.getById);
router.post('/contratos',    contratoController.create);
router.put('/contratos/:id', contratoController.update);
router.delete('/contratos/:id', contratoController.delete);

module.exports = router;
