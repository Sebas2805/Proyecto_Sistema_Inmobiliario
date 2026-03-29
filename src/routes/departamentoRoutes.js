const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamentoController');

router.get('/departamentos',     departamentoController.getAll);
router.get('/departamentos/:id', departamentoController.getById);
router.post('/departamentos',    departamentoController.create);
router.put('/departamentos/:id', departamentoController.update);
router.delete('/departamentos/:id', departamentoController.delete);

module.exports = router;
