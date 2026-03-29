const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

router.get('/materiales',     materialController.getAll);
router.get('/materiales/:id', materialController.getById);
router.post('/materiales',    materialController.create);
router.put('/materiales/:id', materialController.update);
router.delete('/materiales/:id', materialController.delete);

module.exports = router;
