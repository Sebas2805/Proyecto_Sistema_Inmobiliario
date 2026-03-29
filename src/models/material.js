const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema(
  {
    nombre:          { type: String, required: true },
    unidad_medida:   { type: String },
    stock_actual:    { type: Number },
    precio_unitario: { type: Number },
    bodega_id:       { type: mongoose.Schema.Types.ObjectId, ref: 'Bodega' },
  },
  { collection: 'Materiales' }
);

module.exports = mongoose.model('Material', MaterialSchema);
