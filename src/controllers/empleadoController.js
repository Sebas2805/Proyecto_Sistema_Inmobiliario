const empleadoService = require('../services/empleadoService');

class EmpleadoController {
  async getAll(req, res) {
    try {
      const data = await empleadoService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await empleadoService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Empleado no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await empleadoService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await empleadoService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Empleado no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await empleadoService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Empleado no encontrado' });
      res.json({ message: 'Empleado eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new EmpleadoController();
