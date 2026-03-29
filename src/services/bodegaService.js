const Bodega = require('../models/bodega');

class BodegaService {
  async getAll() {
    return await Bodega.find();
  }
  async getById(id) {
    return await Bodega.findById(id);
  }
  async create(data) {
    const item = new Bodega(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Bodega.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Bodega.findByIdAndDelete(id);
  }
}

module.exports = new BodegaService();
