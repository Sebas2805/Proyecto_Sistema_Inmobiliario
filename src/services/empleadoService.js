const Empleado = require('../models/empleado');

class EmpleadoService {
  async getAll() {
    return await Empleado.find();
  }
  async getById(id) {
    return await Empleado.findById(id);
  }
  async create(data) {
    const item = new Empleado(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Empleado.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Empleado.findByIdAndDelete(id);
  }
}

module.exports = new EmpleadoService();
