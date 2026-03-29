const express = require('express');
const router = express.Router();
const propiedadController = require('../controllers/propiedadController');

router.get('/propiedades',     propiedadController.getAll);
router.get('/propiedades/:id', propiedadController.getById);
router.post('/propiedades',    propiedadController.create);
router.put('/propiedades/:id', propiedadController.update);
router.delete('/propiedades/:id', propiedadController.delete);

module.exports = router;
