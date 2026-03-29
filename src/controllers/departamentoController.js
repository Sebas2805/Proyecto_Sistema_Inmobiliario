const departamentoService = require('../services/departamentoService');

class DepartamentoController {
  async getAll(req, res) {
    try {
      const data = await departamentoService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await departamentoService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Departamento no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await departamentoService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await departamentoService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Departamento no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await departamentoService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Departamento no encontrado' });
      res.json({ message: 'Departamento eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new DepartamentoController();
