const Pago = require('../models/pago');

class PagoService {
  async getAll() {
    return await Pago.find();
  }
  async getById(id) {
    return await Pago.findById(id);
  }
  async create(data) {
    const item = new Pago(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Pago.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Pago.findByIdAndDelete(id);
  }
}

module.exports = new PagoService();
