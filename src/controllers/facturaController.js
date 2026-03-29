const facturaService = require('../services/facturaService');

class FacturaController {
  async getAll(req, res) {
    try {
      const data = await facturaService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await facturaService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Factura no encontrada' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await facturaService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await facturaService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Factura no encontrada' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await facturaService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Factura no encontrada' });
      res.json({ message: 'Factura eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new FacturaController();
