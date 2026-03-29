const Propiedad = require('../models/propiedad');

class PropiedadService {
  async getAll() {
    return await Propiedad.find();
  }
  async getById(id) {
    return await Propiedad.findById(id);
  }
  async create(data) {
    const item = new Propiedad(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Propiedad.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Propiedad.findByIdAndDelete(id);
  }
}

module.exports = new PropiedadService();
