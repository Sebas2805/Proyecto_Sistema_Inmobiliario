const mongoose = require('mongoose');

const MovimientoSchema = new mongoose.Schema(
  {
    tipo:          { type: String, enum: ['Ingreso', 'Egreso'] },
    categoria:     { type: String },
    referencia_id: { type: mongoose.Schema.Types.ObjectId },
    fecha:         { type: Date },
    monto:         { type: Number },
    descripcion:   { type: String },
  },
  { collection: 'Movimientos_financieros' }
);

module.exports = mongoose.model('Movimiento', MovimientoSchema);
