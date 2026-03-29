const mongoose = require('mongoose');

const BodegaSchema = new mongoose.Schema(
  {
    nombre:    { type: String, required: true },
    ubicacion: { type: String },
    encargado: { type: String },
  },
  { collection: 'Bodegas' }
);

module.exports = mongoose.model('Bodega', BodegaSchema);
