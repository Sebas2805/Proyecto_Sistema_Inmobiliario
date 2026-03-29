const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema(
  {
    nombre:          { type: String, required: true },
    puesto:          { type: String },
    salario:         { type: Number },
    departamento_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Departamento' },
    fecha_ingreso:   { type: Date },
    estado:          { type: String, enum: ['Activo', 'Inactivo'] },
  },
  { collection: 'Empleados' }
);

module.exports = mongoose.model('Empleado', EmpleadoSchema);
