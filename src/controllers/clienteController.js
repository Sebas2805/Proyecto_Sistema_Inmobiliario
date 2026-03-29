const clienteService = require('../services/clienteService');

class ClienteController {
  async getAll(req, res) {
    try {
      const data = await clienteService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await clienteService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Cliente no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await clienteService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await clienteService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Cliente no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await clienteService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Cliente no encontrado' });
      res.json({ message: 'Cliente eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ClienteController();
