const contratoService = require('../services/contratoService');

class ContratoController {
  async getAll(req, res) {
    try {
      const data = await contratoService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await contratoService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Contrato no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await contratoService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await contratoService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Contrato no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await contratoService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Contrato no encontrado' });
      res.json({ message: 'Contrato eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ContratoController();
