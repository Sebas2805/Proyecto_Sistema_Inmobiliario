const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

router.get('/empleados',     empleadoController.getAll);
router.get('/empleados/:id', empleadoController.getById);
router.post('/empleados',    empleadoController.create);
router.put('/empleados/:id', empleadoController.update);
router.delete('/empleados/:id', empleadoController.delete);

module.exports = router;
