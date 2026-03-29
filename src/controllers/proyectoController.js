const proyectoService = require('../services/proyectoService');

class ProyectoController {
  async getAll(req, res) {
    try {
      const data = await proyectoService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await proyectoService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Proyecto no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await proyectoService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await proyectoService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Proyecto no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await proyectoService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Proyecto no encontrado' });
      res.json({ message: 'Proyecto eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ProyectoController();
