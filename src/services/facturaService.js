const Factura = require('../models/factura');

class FacturaService {
  async getAll() {
    return await Factura.find();
  }
  async getById(id) {
    return await Factura.findById(id);
  }
  async create(data) {
    const item = new Factura(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Factura.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Factura.findByIdAndDelete(id);
  }
}

module.exports = new FacturaService();
