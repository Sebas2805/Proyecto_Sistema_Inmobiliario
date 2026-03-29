const movimientoService = require('../services/movimientoService');

class MovimientoController {
  async getAll(req, res) {
    try {
      const data = await movimientoService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await movimientoService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Movimiento no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await movimientoService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await movimientoService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Movimiento no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await movimientoService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Movimiento no encontrado' });
      res.json({ message: 'Movimiento eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new MovimientoController();
