const Proyecto = require('../models/proyecto');

class ProyectoService {
  async getAll() {
    return await Proyecto.find();
  }
  async getById(id) {
    return await Proyecto.findById(id);
  }
  async create(data) {
    const item = new Proyecto(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Proyecto.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Proyecto.findByIdAndDelete(id);
  }
}

module.exports = new ProyectoService();
