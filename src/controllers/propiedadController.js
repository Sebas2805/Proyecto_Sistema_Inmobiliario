const propiedadService = require('../services/propiedadService');

class PropiedadController {
  async getAll(req, res) {
    try {
      const data = await propiedadService.getAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await propiedadService.getById(req.params.id);
      if (!item) return res.status(404).json({ error: 'Propiedad no encontrada' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const item = await propiedadService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await propiedadService.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ error: 'Propiedad no encontrada' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await propiedadService.delete(req.params.id);
      if (!item) return res.status(404).json({ error: 'Propiedad no encontrada' });
      res.json({ message: 'Propiedad eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new PropiedadController();
