const mongoose = require('mongoose');

const MaterialUsadoSchema = new mongoose.Schema(
  {
    material_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Material' },
    cantidad:    { type: Number },
  },
  { _id: false }
);

const OrdenSchema = new mongoose.Schema(
  {
    propiedad_id:      { type: mongoose.Schema.Types.ObjectId, ref: 'Propiedad', required: true },
    empleado_id:       { type: mongoose.Schema.Types.ObjectId, ref: 'Empleado', required: true },
    descripcion:       { type: String },
    fecha_solicitud:   { type: Date },
    prioridad:         { type: String, enum: ['Alta', 'Media', 'Baja'] },
    estado:            { type: String, enum: ['Pendiente', 'En proceso', 'Completada', 'Cancelada'] },
    materiales_usados: [MaterialUsadoSchema],
    costo_total:       { type: Number },
  },
  { collection: 'Ordenes_mantenimiento' }
);

module.exports = mongoose.model('Orden', OrdenSchema);
