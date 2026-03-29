const Orden = require('../models/orden');

class OrdenService {
  async getAll() {
    return await Orden.find();
  }
  async getById(id) {
    return await Orden.findById(id);
  }
  async create(data) {
    const item = new Orden(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Orden.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Orden.findByIdAndDelete(id);
  }
}

module.exports = new OrdenService();
