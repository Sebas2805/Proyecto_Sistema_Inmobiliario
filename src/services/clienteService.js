const Cliente = require('../models/cliente');

class ClienteService {
  async getAll() {
    return await Cliente.find();
  }
  async getById(id) {
    return await Cliente.findById(id);
  }
  async create(data) {
    const item = new Cliente(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Cliente.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Cliente.findByIdAndDelete(id);
  }
}

module.exports = new ClienteService();
