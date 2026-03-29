const mongoose = require('mongoose');

const ContratoSchema = new mongoose.Schema(
  {
    cliente_id:    { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    propiedad_id:  { type: mongoose.Schema.Types.ObjectId, ref: 'Propiedad', required: true },
    fecha_inicio:  { type: Date },
    fecha_fin:     { type: Date },
    monto_mensual: { type: Number },
    deposito:      { type: Number },
    estado:        { type: String, enum: ['Activo', 'Finalizado', 'Cancelado'] },
  },
  { collection: 'Contratos' }
);

module.exports = mongoose.model('Contrato', ContratoSchema);
