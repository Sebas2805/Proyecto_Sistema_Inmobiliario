const Material = require('../models/material');

class MaterialService {
  async getAll() {
    return await Material.find();
  }
  async getById(id) {
    return await Material.findById(id);
  }
  async create(data) {
    const item = new Material(data);
    await item.save();
    return item;
  }
  async update(id, data) {
    return await Material.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await Material.findByIdAndDelete(id);
  }
}

module.exports = new MaterialService();
