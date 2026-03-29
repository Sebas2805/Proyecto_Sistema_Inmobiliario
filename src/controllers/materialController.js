const materialService = require('../services/materialService');

class MaterialController {
  async getAll(req, res) {
    try {
      const data = await materialService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await materialService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Material no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await materialService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await materialService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Material no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await materialService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Material no encontrado' });
      res.json({ message: 'Material eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new MaterialController();
