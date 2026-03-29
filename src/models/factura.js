const mongoose = require('mongoose');

const DetalleSchema = new mongoose.Schema(
  {
    descripcion: { type: String },
    monto:       { type: Number },
  },
  { _id: false }
);

const FacturaSchema = new mongoose.Schema(
  {
    contrato_id:       { type: mongoose.Schema.Types.ObjectId, ref: 'Contrato', required: true },
    cliente_id:        { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    fecha_emision:     { type: Date },
    fecha_vencimiento: { type: Date },
    monto_total:       { type: Number },
    estado:            { type: String, enum: ['Pendiente', 'Pagada', 'Vencida', 'Anulada'] },
    detalle:           [DetalleSchema],
  },
  { collection: 'Facturas' }
);

module.exports = mongoose.model('Factura', FacturaSchema);
