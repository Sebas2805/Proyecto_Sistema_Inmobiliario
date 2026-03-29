const mongoose = require('mongoose');

const DepartamentoSchema = new mongoose.Schema(
  {
    nombre:      { type: String, required: true },
    descripcion: { type: String },
  },
  { collection: 'Departamentos' }
);

module.exports = mongoose.model('Departamento', DepartamentoSchema);
