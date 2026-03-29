const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

router.get('/proyectos',     proyectoController.getAll);
router.get('/proyectos/:id', proyectoController.getById);
router.post('/proyectos',    proyectoController.create);
router.put('/proyectos/:id', proyectoController.update);
router.delete('/proyectos/:id', proyectoController.delete);

module.exports = router;
