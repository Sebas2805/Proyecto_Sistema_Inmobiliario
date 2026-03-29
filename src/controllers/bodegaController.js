const bodegaService = require('../services/bodegaService');

class BodegaController {
  async getAll(req, res) {
    try {
      const data = await bodegaService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await bodegaService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Bodega no encontrada' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await bodegaService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await bodegaService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Bodega no encontrada' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await bodegaService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Bodega no encontrada' });
      res.json({ message: 'Bodega eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new BodegaController();
