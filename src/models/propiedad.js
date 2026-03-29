const mongoose = require('mongoose');

const PropiedadSchema = new mongoose.Schema(
  {
    codigo:          { type: String, required: true },
    tipo:            { type: String },
    area_m2:         { type: Number },
    precio_alquiler: { type: Number },
    precio_venta:    { type: Number },
    estado:          { type: String, enum: ['Disponible', 'Alquilada', 'Vendida', 'En mantenimiento'] },
    proyecto_id:     { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto', default: null },
    direccion:       { type: String },
  },
  { collection: 'Propiedades' }
);

module.exports = mongoose.model('Propiedad', PropiedadSchema);
