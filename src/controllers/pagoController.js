const pagoService = require('../services/pagoService');

class PagoController {
  async getAll(req, res) {
    try {
      const data = await pagoService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await pagoService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Pago no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await pagoService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await pagoService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Pago no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await pagoService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Pago no encontrado' });
      res.json({ message: 'Pago eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new PagoController();
