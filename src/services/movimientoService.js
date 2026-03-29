const Movimiento = require('../models/movimiento');

class MovimientoService {
  async getAll() {
    return await Movimiento.find();
  }
  async getById(id) {
    return await Movimiento.findById(id);
  }
  async create(data) {
    const item = new Movimiento(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Movimiento.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Movimiento.findByIdAndDelete(id);
  }
}

module.exports = new MovimientoService();
