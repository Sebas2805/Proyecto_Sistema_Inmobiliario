const ordenService = require('../services/ordenService');

class OrdenController {
  async getAll(req, res) {
    try {
      const data = await ordenService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await ordenService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Orden no encontrada' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await ordenService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await ordenService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Orden no encontrada' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await ordenService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Orden no encontrada' });
      res.json({ message: 'Orden eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new OrdenController();
