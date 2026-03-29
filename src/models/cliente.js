const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema(
  {
    tipo:            { type: String },
    nombre:          { type: String, required: true },
    identificacion:  { type: String },
    telefono:        { type: String },
    email:           { type: String },
    fecha_registro:  { type: Date, default: Date.now },
    estado:          { type: String, enum: ['Activo', 'Inactivo'] },
  },
  { collection: 'Clientes' }
);

module.exports = mongoose.model('Cliente', ClienteSchema);
