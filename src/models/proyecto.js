const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema(
  {
    nombre:      { type: String, required: true },
    tipo:        { type: String },
    ubicacion: {
      pais:      { type: String },
      provincia: { type: String },
      canton:    { type: String },
    },
    anio_inicio: { type: Number },
    estado:      { type: String, enum: ['Activo', 'Inactivo', 'Completado'] },
    descripcion: { type: String },
  },
  { collection: 'Proyectos_inmobiliarios' }
);

module.exports = mongoose.model('Proyecto', ProyectoSchema);
