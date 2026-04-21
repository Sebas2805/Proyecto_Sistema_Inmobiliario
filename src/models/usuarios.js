const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  identificacion: { type: String, required: true, unique: true },
  correo:         { type: String, required: true, unique: true },
  contrasena:     { type: String, required: true }
}, { collection: 'Usuarios' });

module.exports = mongoose.model('Usuario', UsuarioSchema);