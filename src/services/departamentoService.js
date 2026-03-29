const Departamento = require('../models/departamento');

class DepartamentoService {
  async getAll() {
    return await Departamento.find();
  }
  async getById(id) {
    return await Departamento.findById(id);
  }
  async create(data) {
    const item = new Departamento(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Departamento.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Departamento.findByIdAndDelete(id);
  }
}

module.exports = new DepartamentoService();
