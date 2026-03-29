const Contrato = require('../models/contrato');

class ContratoService {
  async getAll() {
    return await Contrato.find();
  }
  async getById(id) {
    return await Contrato.findById(id);
  }
  async create(data) {
    const item = new Contrato(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Contrato.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Contrato.findByIdAndDelete(id);
  }
}

module.exports = new ContratoService();
