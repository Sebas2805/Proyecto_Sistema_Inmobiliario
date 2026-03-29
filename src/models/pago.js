const mongoose = require('mongoose');

const PagoSchema = new mongoose.Schema(
  {
    factura_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Factura', required: true },
    fecha_pago: { type: Date },
    metodo:     { type: String },
    monto:      { type: Number },
    referencia: { type: String },
  },
  { collection: 'Pagos' }
);

module.exports = mongoose.model('Pago', PagoSchema);
